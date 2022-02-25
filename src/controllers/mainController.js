const dirDatabases = "../databases/";
const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");

module.exports = {
  index: (req, res) => {
    let cantidadSlider = 3;
    let productsMasCompradosOrdenados = products.sort(
      (a, b) => b.buyes - a.buyes
    );
    let productsMasComprados = [];
    for (
      let i = 0;
      i < cantidadSlider && i < productsMasCompradosOrdenados.length;
      i++
    ) {
      productsMasComprados.push(productsMasCompradosOrdenados[i]);
    }
    res.render("index.ejs", {
      settingGeneral,
      index,
      productsMasComprados,
    });
  },
};
