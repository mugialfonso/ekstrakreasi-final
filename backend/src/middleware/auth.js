const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY

const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Akses ditolak. Token tidak ditemukan." });
    }

    jwt.verify(token, SECRET_KEY, (err, admin) => {
        if (err) {
            return res.status(403).json({ message: "Token tidak valid." });
        }

        req.admin = admin; // Simpan data admin yang di-decode dari token
        next();
    });
};

module.exports = authenticateAdmin;