const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
  password: "12345678",
  host: "localhost",
  port: 5432,
  database: "labomovel_db"
})
module.exports = pool;