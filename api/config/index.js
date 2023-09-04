// config - this is where you configurate the database

require("dotenv").config();
const { createPool } = require("mysql2");
let connection = createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPass,
  database: process.env.dbName,
  port: process.env.dbPort,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connection;
