const DEFAULT_DOCUMENT_ID = "fy-2026-27-kush-prakhar";

function env(name) {
  return process.env[name] || "";
}

function getConfig() {
  const supabaseUrl = env("SUPABASE_URL").replace(/\/+$/, "");
  const serviceRoleKey = env("SUPABASE_SERVICE_ROLE_KEY");
  const documentId = env("ROADMAP_DOCUMENT_ID") || DEFAULT_DOCUMENT_ID;
  const adminToken = env("ROADMAP_ADMIN_TOKEN");

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      ok: false,
      error: "Backend is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    };
  }

  return {
    ok: true,
    supabaseUrl,
    serviceRoleKey,
    documentId,
    adminToken
  };
}

function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders
    },
    body: JSON.stringify(body)
  };
}

function normalizeHeaders(headers = {}) {
  return Object.entries(headers).reduce((next, [key, value]) => {
    next[key.toLowerCase()] = Array.isArray(value) ? value[0] : value;
    return next;
  }, {});
}

function isAuthorized(headers, config) {
  if (!config.adminToken) return true;
  const normalized = normalizeHeaders(headers);
  const token = normalized["x-roadmap-admin-token"] || "";
  return token === config.adminToken;
}

async function supabaseRequest(config, path, options = {}) {
  const response = await fetch(`${config.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: config.serviceRoleKey,
      authorization: `Bearer ${config.serviceRoleKey}`,
      "content-type": "application/json",
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }

  if (!response.ok) {
    const message = Array.isArray(body)
      ? JSON.stringify(body)
      : body?.message || body?.hint || body || "Supabase request failed.";
    throw new Error(message);
  }

  return body;
}

async function getRoadmap(config) {
  const rows = await supabaseRequest(
    config,
    `roadmap_documents?id=eq.${encodeURIComponent(config.documentId)}&select=data,updated_at&limit=1`
  );

  const row = Array.isArray(rows) ? rows[0] : null;
  return {
    roadmap: row?.data || null,
    updatedAt: row?.updated_at || null
  };
}

async function saveRoadmap(config, roadmap) {
  if (!roadmap || typeof roadmap !== "object" || !Array.isArray(roadmap.quarters)) {
    return json(400, { error: "Invalid roadmap payload. Expected a roadmap object with quarters." });
  }

  const updatedAt = new Date().toISOString();
  const rows = await supabaseRequest(
    config,
    "roadmap_documents?on_conflict=id",
    {
      method: "POST",
      headers: {
        prefer: "resolution=merge-duplicates,return=representation"
      },
      body: JSON.stringify([
        {
          id: config.documentId,
          data: roadmap,
          updated_at: updatedAt
        }
      ])
    }
  );

  const row = Array.isArray(rows) ? rows[0] : null;
  return json(200, {
    ok: true,
    roadmap: row?.data || roadmap,
    updatedAt: row?.updated_at || updatedAt
  });
}

async function handleRoadmapRequest({ method, headers, body }) {
  const config = getConfig();

  if (method === "OPTIONS") {
    return json(204, {});
  }

  if (!config.ok) {
    return json(500, { error: config.error });
  }

  try {
    if (method === "GET") {
      return json(200, await getRoadmap(config));
    }

    if (method === "PUT" || method === "POST") {
      if (!isAuthorized(headers, config)) {
        return json(401, {
          error: "Edit passcode required.",
          code: "ROADMAP_ADMIN_TOKEN_REQUIRED"
        });
      }

      const payload = typeof body === "string" ? JSON.parse(body || "{}") : body || {};
      return await saveRoadmap(config, payload.roadmap || payload);
    }

    return json(405, { error: "Method not allowed." }, { allow: "GET, PUT, POST, OPTIONS" });
  } catch (error) {
    return json(500, { error: error.message || "Backend request failed." });
  }
}

module.exports = {
  handleRoadmapRequest
};
