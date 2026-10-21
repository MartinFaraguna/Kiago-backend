const pruebaRepository = require('../repositories/pruebaRepository');

exports.getStatus = () => {
  return pruebaRepository.getDatos();
}

exports.obtenerDatos = async () => {
  const datosDeBD = await pruebaRepository.consultarBaseDeDatos();
  return datosDeBD;
}