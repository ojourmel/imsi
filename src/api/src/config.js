/**
 * @author ojourmel
 */

let config = {};

// A few constants can be set by the environment
config.NODE_ENV = process.env.NODE_ENV || 'development';
config.api_port = process.env.API_PORT;
config.sql = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
  address: process.env.POSTGRES_ADDRESS,
  port: process.env.POSTGRES_PORT,
  pool: {
    max: 24,
    timeout: 30000
  }
};

/*
 * Set constants.
 * The values set in CONFIG_PATH however, are not frozen
 * and can be freely modified.
 *
 */
Object.freeze(config.NODE_ENV);
Object.freeze(config.api_port);
Object.freeze(config.sql);

/*
 * Overwrite module export object to be config
 * @see http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
 *
 */
module.exports = config;
