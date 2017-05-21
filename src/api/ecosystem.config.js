module.exports = {
  apps : [{
    name        : "imsi api",
    script      : "./server.js",
    watch       : true,
    watch       : ["./"],
    ignore_watch: ["node_modules"],
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}
