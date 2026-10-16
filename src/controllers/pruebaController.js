const pruebaService = require('../services/pruebaService');

exports.getStatus = (req, res) => {
  const data = pruebaService.getStatus();
  res.status(200).json(data);
}