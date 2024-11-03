const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.BASE_DATOS, 
    process.env.USUARIO, 
    process.env.PASSWORD, {
    host: process.env.SERVIDOR,
    port:process.env.PORT,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos MySQL'))
  .catch((error) => console.error('Error de conexión:', error));

module.exports = sequelize;
