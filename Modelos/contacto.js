const { DataTypes } = require('sequelize');
const sequelize = require('../db/conection');

const Contacto = sequelize.define('Contacto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'contacto',
  timestamps: false,
});

module.exports = Contacto;
