const dirDatabases = "../databases/";
const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");

const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response");

/**MiniBanner
 * For more information see /wiews/partials/miniBanner.ejs
 */
minibar = {
  title: "Admin Principal",
  icon: "eos-icons:admin-outlined",
};

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
  const validations = validationResult(req);
  const errors=validationResult(req).array();
  console.log("errors.[0]",errors[0]);
  console.log("Estos es lo que devuelve validations", validations.array.length);

  if (errors[0]!=undefined) {
    console.log("el tamaño de error dentro de errores es", validations.array.length, "El error es ", validations.mapped());
    return await res.render("createUser.ejs", {
      settingGeneral,
      index,
      minibar,
      errors: validations.mapped(),
      old: req.body,
    });
  } else {
    res.redirect("/login");
    console.log("No hay errores");
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
