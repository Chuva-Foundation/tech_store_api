const Pool = require("pg").Pool;
require("dotenv").config()
console.log(process.env.PWD);

const pool = new Pool({
    user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database
})
module.exports = pool;