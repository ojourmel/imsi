module.exports = {
  apps : [{
    name        : "imsi api",
    script      : "./src/server.js",
    watch       : ["./src"],
    ignore_watch: ["node_modules", "**/*.swp"],
    env: {
      NODE_ENV: "development",
    },
    env_production : {
       NODE_ENV: "production"
    }
  }]
}
