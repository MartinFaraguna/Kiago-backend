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

module.exports = {
    obtenerPrueba,
};