const dbPool = require("../config/database")

const Admin = {
    findByUsername: async (username) => {
        const [rows] = await dbPool.query("SELECT * FROM admin WHERE username = ?", [username]);
        return rows[0]; // Mengembalikan satu admin (jika ditemukan)
    },
};


module.exports = Admin;