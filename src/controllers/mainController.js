const dirDatabases = "../databases/";
const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");

module.exports = {
  index: (req, res) => {
    res.render("index.ejs", {
      settingGeneral,
      index,
      products,
    });
  },
};
