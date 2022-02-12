/* Imports */
const express=require("express");
const router=express.Router();

const adminController = require("../controllers/adminController.js");

router.get("/admin", adminController.admin);

router.get("/admin/products", adminController.products);

module.exports=router;
