const express = require("express");
const router = express.Router();
const userController=require("../controllers/userController.js");
const { validateUser } = require("../middleWares/userMiddleWare.js");

router.get("/user/dashboard", validateUser, userController.dashboard);

router.get("/user", validateUser, userController.user);

module.exports=router;