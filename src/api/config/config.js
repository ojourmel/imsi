/**
 * @author ojourmel
 */

let config = {};

// A few constants can be set by the environment
config.NODE_ENV = process.env.NODE_ENV || 'development';
config.api_port = process.env.OMP_API_PORT || 8081;

/*
 * Set constants.
 * The values set in CONFIG_PATH however, are not frozen
 * and can be freely modified.
 *
 */
Object.freeze(config.NODE_ENV);
Object.freeze(config.api_port);

/*
 * Overwrite module export object to be config
 * @see http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
 *
 */
module.exports = config;
