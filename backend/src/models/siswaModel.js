const dbPool = require("../config/database");

//read
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM siswa";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO siswa (nama, gender, kelas) VALUES (?, ?, ?)`;
  return dbPool.execute(SQLQuery, [body.nama, body.gender, body.kelas]);
};

const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE siswa
                    SET nama='${body.nama}', gender='${body.gender}', kelas='${body.kelas}' 
                    WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM siswa WHERE id = ?`;
  return dbPool.execute(SQLQuery, [idUser]);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
