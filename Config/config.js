const Pool = require("pg").Pool;
require("dotenv").config();


const pool = new Pool({
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE

})

module.exports = pool;