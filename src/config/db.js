const { Sequelize } = require('sequelize');

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // remove if you want SQL logs
});

module.exports = sequelize;
