const { Pool } = require("pg");
const pool = require("../Config/config");


class Products {

    static async create_products (name, price, discriptions) {
        
        try {
            const products = await pool.query("INSERT INTO products (name, price, discriptions) VALUES($1, $2, $3) RETURNING *",[name, price, discriptions]);
            return products.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_bycat(categories_id) {
        try {
            const products = await pool.query("SELECT FROM products WHERE categories_id = $1", [categories_id]);
            return products.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }

    static async get_byId(id) {
        try {
            const products = await pool.query("SELECT FROM products WHERE id = $1", [id]);
            return products.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }

    static async get_all() {
        try {
            const products = await pool.query("SELECT * FROM products");
            return products.rows;
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Products;