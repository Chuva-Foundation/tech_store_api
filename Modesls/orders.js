const { Pool } = require("pg");
const pool = require("../Config/config");


class Orders {

    static async create_order (name, time) {
        try {
            const time = new Date();
             const orders = await pool.query("INSERT INTO orders (name, time) VALUES ($1, $2) RETURNING *", [name, time]);
            return orders.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_orders(id) {
        try {
            const orders = await pool.query("SELECT FROM orders WHERE id = $1", [id]);
            return orders.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }

    static async get_allorders() {
        try {
            const orders = await pool.query("SELECT * FROM orders");
            return orders.rows;
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Orders;