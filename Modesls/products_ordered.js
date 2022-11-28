const { Pool } = require("pg");
const pool = require("../Config/config");


class Ordered {

    static async create_ordered (orders_id, products_id, quantity, price) {

        try {
             const ordered = await pool.query("INSERT INTO orders (orders_id, products_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *", [orders_id, products_id, quantity, price]);
            return ordered.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_ordered(orders_id) {
        try {
            const ordered = await pool.query("SELECT FROM orders WHERE orders_id = $1", [orders_id]);
            return ordered.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }


 }

module.exports = Ordered;