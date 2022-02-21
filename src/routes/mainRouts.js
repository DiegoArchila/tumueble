/* Imports */
const express=require("express");
const router=express.Router();

const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/user/create", mainController.createUser);

module.exports=router;
