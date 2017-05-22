/**
 * @author ojourmel
 */
const router = require('falcor-router');

const imsi_router = new router([{
    // match a request for the key "greeting"
  route: 'greeting',
    // respond with a PathValue with the value of "Hello World."
  get: () => {
    return { path:['greeting'], value: 'Hello World' };
  }
}
]);

module.exports = imsi_router;
