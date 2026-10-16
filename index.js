const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite peticiones desde tu Angular
app.use(express.json()); // Permite recibir datos en formato JSON

// Rutas
const routerPrueba = require('./src/routers/routerPrueba');

// Ruta de prueba
app.use('/', routerPrueba);

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});