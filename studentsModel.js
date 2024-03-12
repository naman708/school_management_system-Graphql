const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Students = sequelize.define('Students', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  className: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  phno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Students;