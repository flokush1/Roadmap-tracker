const { handleRoadmapRequest } = require("../../lib/roadmap-store");

exports.handler = async (event) => {
  return handleRoadmapRequest({
    method: event.httpMethod,
    headers: event.headers,
    body: event.body
  });
};
