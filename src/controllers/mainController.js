const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");
const { minibar } =require("../lib/complements.js");
const { create } = require("../models/users.js");
const categories = require("../databases/business/productsCategories.json");
const { toCOP } = require("../lib/formats.js");


const functions = require("../lib/functions.js");

const home = async (req, res) => {
  index.title = "home";

  let productsMasComprados = functions.recortarTamanioDeUnArreglo(
    [...products].sort((a, b) => b.buyes - a.buyes), //Se ordenan por productos mas comprados
    3 //Cantidad de sliders a mostrar
  );

  let productsOfertas = functions.recortarTamanioDeUnArreglo(
    [...products]
      .map((product) => {
        if (product.discount > 0) {
          return product;
        }
      })
      .sort((a, b) => b.discount - a.discount), //Productos con ofertas de mayor a menor
    3 //Cantidad de sliders a mostrar
  );

  let productsCategories = [];
  let productsByCategorie = [];

  categories.forEach((category) => {
    productsByCategorie = functions.recortarTamanioDeUnArreglo(
      [...products]
        .filter((product) => product.category == category.name) //Filtro por categoria
        .sort((a, b) => b.buyes - a.buyes), //Se organizan por mas vendidos
      3 //Se recorta el array a 3
    );
    if (productsByCategorie.length > 0) {
      productsCategories.push(productsByCategorie);
    }
    productsByCategorie = [];
  });

  try {
    await res.render("index.ejs", {
      settingGeneral,
      index,
      productsMasComprados,
      productsOfertas,
      productsCategories,
      categories,
      toCOP,
    });
  } catch (error) {
    throw error;
  }
};

const login = async (req, res) => {
  index.title = "login";
  try {
    await res.render("login.ejs", {
      settingGeneral,
      index,
      minibar,
    });
  } catch (error) {
    throw error;
  }
};

const createUser = async (req, res) => {

  try {
    create(req.body);
    res.redirect("/login");
  } catch (error) {
    throw error;
  }

};

const showCreateUser = async (req, res) => {
  try {
    await res.render("createUser.ejs", {
      settingGeneral,
      index,
      minibar,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  home,
  login,
  showCreateUser,
  createUser,
};
