const { API } = require('../config/env');

const hasProperRequiredHeader = (request) => {
  const requiredHeader = request.headers[API.header_key.toLowerCase()];
  return requiredHeader && requiredHeader === API.header_value;
};

module.exports = (req, res, next) => {
  if (hasProperRequiredHeader(req)) {
    next();
  } else {
    res.sendStatus(403);
  }
};
