require("dotenv").config();

module.exports = {
  server: {
    env: process.env.SERVER_ENV,
    port: process.env.SERVER_PORT || 3000,
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME,
    ip: process.env.DB_IP,
  },
};
