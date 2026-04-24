const { handleRoadmapRequest } = require("../lib/roadmap-store");

module.exports = async function roadmapApi(req, res) {
  const body = typeof req.body === "string" ? req.body : JSON.stringify(req.body || {});
  const result = await handleRoadmapRequest({
    method: req.method,
    headers: req.headers,
    body
  });

  Object.entries(result.headers || {}).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  res.status(result.statusCode).send(result.statusCode === 204 ? "" : result.body);
};
