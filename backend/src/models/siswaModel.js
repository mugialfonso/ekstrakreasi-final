const dbPool = require("../config/database");

//read user (via page admin)
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM siswa";

  return dbPool.execute(SQLQuery);
};

//create new user (dari form)
const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO siswa (nama, gender, kelas) VALUES (?, ?, ?)`;
  return dbPool.execute(SQLQuery, [body.nama, body.gender, body.kelas]);
};

//update user (via page admin)
const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE siswa
                    SET nama='${body.nama}', gender='${body.gender}', kelas='${body.kelas}' 
                    WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

//deleted user (via page admin)
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
