const { Pool } = require("pg");
const pool = require("../Config/config");


class Orders {

    static async create_order (products_id) {

        try {
            const orders = await pool.query("SELECT FROM products WHERE products_id = $1", [products_id]);
            return orders.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_orders(orders_id) {
        try {
            const orders = await pool.query("SELECT FROM orders WHERE orders_id = $1", [orders_id]);
            return orders.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Orders;