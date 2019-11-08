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
      username: "postgres",
      password: config.dbPassword,
      database: "plantmate-db",
      host: "plantmate-db.celjfwvtv2e1.us-east-1.rds.amazonaws.com",
      dialect: "postgres",
    }
};
