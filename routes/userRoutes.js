const express = require("express");
const userController = require("../controller/userController")
const validation = require("../middleware/validation")

const routes = express.Router();

routes.post("/signup",validation.userNameValidation,userController.signup);
routes.post("/login",userController.login)

module.exports = routes;