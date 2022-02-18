/* Imports */
const express=require("express");
const router=express.Router();

const adminController = require("../controllers/adminController.js");


router.get("/admin", adminController.admin);

/**
 * Admin User
 */
router.get("/admin/user", adminController.user);
router.post("/admin/user", adminController.user);

/**
 * Admin Products
 */
router.get("/admin/products", adminController.products);
router.get("/admin/products/new", adminController.newProduct);
router.post("/admin/products/new", adminController.newProduct);

module.exports=router;
