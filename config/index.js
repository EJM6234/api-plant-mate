require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbPassword: process.env.DB_PASSWORD,
  expressSecret: process.env.EXPRESS_SECRET,
};
