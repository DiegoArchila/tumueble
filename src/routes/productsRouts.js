/* Imports */
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

//Product detail
router.get("/products/detail/:id", productsController.detailProduct);

module.exports = router;
