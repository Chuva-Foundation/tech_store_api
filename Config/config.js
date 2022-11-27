const Pool = require("pg").Pool;
require("dotenv").config();


const pool = new Pool({
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE

  // user: "postgres",
  // password: "12345678",
  // host: "localhost",
  // port: "5432",
  // database: "labomovel_db"
})

module.exports = pool;