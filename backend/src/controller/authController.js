const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");

const SECRET_KEY = process.env.SECRET_KEY

const authController = {
    loginAdmin: async (req, res) => {
        const { username, password } = req.body;

        try {
            // Cari admin berdasarkan username
            const admin = await Admin.findByUsername(username);
            if (!admin) {
                return res.status(404).json({ message: "Admin tidak ditemukan" });
            }

            // Verifikasi password menggunakan bcrypt
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Password salah" });
            }

            // Jika password cocok, buat token JWT
            const token = jwt.sign({ id: admin.id, username: admin.username }, SECRET_KEY, { expiresIn: "2h" });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: "Terjadi kesalahan server", error });
        }
    },
};

module.exports = authController;