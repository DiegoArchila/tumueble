/* Imports */
const express=require("express");
const router=express.Router();

const cartController = require("../controllers/cartController.js");

router.get("/cart", cartController.cart);

module.exports=router;
