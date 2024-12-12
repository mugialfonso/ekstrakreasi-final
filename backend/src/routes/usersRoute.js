const express = require("express");
const router = express.Router();
const userController = require("../controller/usersController.js");

//create
router.post("/", userController.createNewUser);

//read
router.get("/", userController.getAllUsers);

//update
router.patch('/:idUser', userController.updateUser)

//delete
router.delete("/:idUser", userController.deleteUser);

module.exports = router;
