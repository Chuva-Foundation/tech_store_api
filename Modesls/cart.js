const { Pool } = require("pg");
const pool = require("../Config/config");


class Cart {

    static async create_cart (users_id, products_id, quantity, price) {

        try {
             const cart = await pool.query("INSERT INTO cart (users_id, products_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *", [users_id, products_id, quantity, price]);
            return cart.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_cart(users_id) {
        try {
            const cart = await pool.query("SELECT FROM cart WHERE users_id = $1", [users_id]);
            return cart.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }


 }

module.exports = Cart;