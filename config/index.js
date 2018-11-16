const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : 'development';

require('dotenv').config({ path: `./${currentEnvironment}.env` })

const config = {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
}

module.exports = config;
