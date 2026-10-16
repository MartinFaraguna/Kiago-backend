const express = require('express');
const router = express.Router();
const pruebaController = require('../controllers/pruebaController');

// Ruta de prueba
router.get('/status', pruebaController.getStatus);

module.exports = router;