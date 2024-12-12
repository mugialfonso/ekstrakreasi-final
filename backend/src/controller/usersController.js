const siswaModel = require("../models/siswaModel");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await siswaModel.getAllUsers();

    res.json({
      message: "GET All users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Erorr",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  

  try {
    await siswaModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Erorr",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await siswaModel.updateUser(body, idUser);

    res.status(201).json({
      message: "UPDATE user succses",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Erorr",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await siswaModel.deleteUser(idUser);

    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Erorr",
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createNewUser, deleteUser, updateUser };
