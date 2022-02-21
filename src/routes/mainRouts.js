/* Imports */
const express=require("express");
const router=express.Router();
const {validationsCreateUser}=require("../validations/forms.js");


const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);
router.get("/login", mainController.login);

router.get("/user/create", mainController.createUser);
router.post("/user/create", validationsCreateUser, mainController.createUser);

module.exports=router;
