const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");
const categories = require("../databases/business/productsCategories.json");
/** Format the price to currency COP
 */
const { toCOP } = require("../lib/formats.js");

const { validationResult } = require("express-validator");

const functions = require("../lib/functions.js");

const detailProduct = async (req, res) => {
  let id = req.params.id;
  let product = products.find((product) => product.id == id);
  if (product) {
    res.render("../views/productDetail.ejs", {
      settingGeneral,
      index,
      product,
      toCOP,
    });
  }
};

module.exports = {
  detailProduct,
};
