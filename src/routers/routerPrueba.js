const express = require('express');
const router = express.Router();
const pruebaController = require('../controllers/pruebaController');

// Ruta de prueba
router.get('/status', pruebaController.obtenerPrueba);
router.get('/imagenes', pruebaController.obtenerImagenes);
router.get('/categorias', pruebaController.obtenerCategorias);

module.exports = router;