/**
 * @author ojourmel
 */
const router = require('falcor-router');
const db = require('./db');

const imsiRouter = new router([{
    // match a request for the key 'greeting'
  route: 'greeting',
    // respond with a PathValue with the value of 'Hello World.'
  get: () => {
    return { path:['greeting'], value: ['Hello World', 'Goodbye World'] }
  }
},
{
  route: 'creation',
  get: () => {
    return db.query('SELECT * FROM creation', null, (err, dbres) => {
      console.log(JSON.stringify(err, dbres, null, 2));
      return {
        path:['creation'],
        value: dbres.rows
      };
    });
  }

}
]);

module.exports = imsiRouter;
