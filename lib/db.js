config = require('../config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
