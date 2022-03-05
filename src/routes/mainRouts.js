/* Imports */
const express = require("express");
const router = express.Router();
const {validationsCreateUser, validateErrorscreateUser,
  validationLogin, validationLoginUser} = require("../middleWares/formsMiddleWares.js");

const { validateSesion } = require("../middleWares/mainMiddleware.js");

const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);

router.get("/login", mainController.login);
router.post("/login",validationLogin,validationLoginUser, mainController.validateUser);

router.get("/logout", validateSesion, mainController.logout);

router.get("/user/create", mainController.showCreateUser);
router.post("/user/create", validationsCreateUser,
   validateErrorscreateUser ,mainController.createUser);

module.exports = router;
