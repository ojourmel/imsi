module.exports = {
  apps : [{
    name        : "imsi api",
    script      : "./server/server.js",
    watch       : ["./server"],
    ignore_watch: ["node_modules", "**/*.swp"],
    env: {
      NODE_ENV: "development",
    },
    env_production : {
       NODE_ENV: "production"
    }
  }]
}
