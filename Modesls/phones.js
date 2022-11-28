const { Pool } = require("pg");
const pool = require("../Config/config");


class Phones {

    static async create_phones (number, user_id) {
        try {
            const phones = await pool.query("INSERT INTO phones (number, users_id) VALUES($1, $2) RETURNING *",[number, user_id]);
            return phones.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }
    
    static async get_phones() {
        try {
            const phones = await pool.query("SELECT * FROM phones");
            return phones.rows;
        } catch (error) {
            console.error(error.message);
        }
    }

    static async get_phonesByid(users_id) {
        try {
            const phones = await pool.query("SELECT FROM phones Where (users_id) = $1" [users_id]);
            return phones.rows;
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Phones;