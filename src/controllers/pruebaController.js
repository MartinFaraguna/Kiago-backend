const pruebaService = require('../services/pruebaService');

const obtenerPrueba = async (req, res) => {
    try {
        const datos = await pruebaService.obtenerDatos();
        res.json(datos); // Responde exitosamente con los datos
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerImagenes = async (req, res) => {
    try {
        const imagenes = await pruebaService.obtenerImagenes();
        res.json(imagenes); // Responde exitosamente con las imágenes
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await pruebaService.obtenerCategorias();
        res.json(categorias); // Responde exitosamente con las categorías
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerPrueba,
    obtenerImagenes,
    obtenerCategorias,
};