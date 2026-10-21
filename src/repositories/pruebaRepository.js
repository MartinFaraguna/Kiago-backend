const db = require('../config/db');

exports.getDatos = () => {
  return {
    status: "200",
    data: [
      { id: 1, titulo: "Ticket 1" },
      { id: 2, titulo: "Ticket 2" },
    ],
  };
};

const consultarBaseDeDatos = async () => {
    try {
        // Hacemos la consulta real a tu tabla 'locales'
        const [rows] = await db.query('SELECT * FROM locales');
        
        // Devolvemos las filas obtenidas de la base de datos
        return rows;
    } catch (error) {
        console.error('Error en la base de datos:', error);
        throw new Error('Error al consultar la base de datos');
    }
};

module.exports = { consultarBaseDeDatos };