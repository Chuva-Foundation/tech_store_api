const { Pool } = require("pg");
const pool = require("../Config/config");


class Categories {

    static async create_categories (name) {
        try {
            const categories = await pool.query("INSERT INTO categories (name) VALUES($1) RETURNING *",[name]);
            return categories.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_categories() {
        try {
            const categories = await pool.query("SELECT * FROM categories");
            return categories.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Categories;