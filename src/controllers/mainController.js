const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");
const { minibar } =require("../lib/complements.js");
const { create } = require("../models/users.js");



const home = async (req, res) => {
  index.title = "home";
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
  try {
    await res.render("index.ejs", {
      settingGeneral,
      index,
      productsMasComprados,
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
    await create(req.body);
    await res.render("login.ejs", {
      settingGeneral,
      index,
      minibar,
    });
  } catch (error) {
    throw error;
  }
  
};

const showCreateUser = async (req, res) => {
  try {
    await res.redirect("/login");
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
