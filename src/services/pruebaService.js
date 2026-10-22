const pruebaRepository = require('../repositories/pruebaRepository');

exports.getStatus = () => {
  return pruebaRepository.getDatos();
}

exports.obtenerDatos = async () => {
  const datosDeBD = await pruebaRepository.consultarBaseDeDatos();
  return datosDeBD;
}

exports.obtenerImagenes = async () => {
  const imagenes = await pruebaRepository.consultarImagenes();
  return imagenes;
}

exports.obtenerCategorias = async () => {
  const categorias = await pruebaRepository.consultarCategorias();
  return categorias;
}