const config = require('./');

module.exports = {
    development: {
      username: "plant_mate",
      password: config.dbPassword,
      database: "plant_mate_db",
      host: "127.0.0.1",
      dialect: "postgres",
      logging: console.log,
    },
    production: {
      use_env_variable: "",
      dialect: ""
    }
};
