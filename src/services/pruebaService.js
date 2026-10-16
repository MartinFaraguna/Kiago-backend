const pruebaRepository = require('../repositories/pruebaRepository');

exports.getStatus = () => {
  return pruebaRepository.getDatos();
}