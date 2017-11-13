/*
 * @see https://github.com/brianc/node-postgres#pooling-example
 */
const config = require("./config");
const pg = require("pg");

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
const pg_config = {
  user: config.sql.user,
  database: config.sql.db,
  password: config.sql.password,
  host: config.sql.address,
  port: config.sql.port,
  max: config.sql.pool.max,
  idleTimeoutMillis: config.sql.pool.timeout
};

//this initializes a connection pool
const pool = new pg.Pool(pg_config);

pool.on("error", (err, client) => {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error("idle client error", err.message, err.stack);
});

module.exports = pool;

// //export the query method for passing queries to the pool
// module.exports.query = (text, values, callback) => {
//   return pool.query(text, values, callback);
// };

// // the pool also supports checking out a client for
// // multiple operations, such as a transaction
// module.exports.connect = (callback) => {
//   return pool.connect(callback);
// };
