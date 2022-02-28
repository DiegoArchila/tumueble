const dirDatabases = "../databases/";
const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");
const products = require("../databases/business/products.json");
const categories = require("../databases/business/productsCategories.json");
/** Format the price to currency COP
 */
const { toCOP } = require("../lib/formats.js");

const { validationResult } = require("express-validator");
const { redirect } = require("express/lib/response");

const functions = require("../lib/functions.js");

/**MiniBanner
 * For more information see /wiews/partials/miniBanner.ejs
 */
minibar = {
  title: "Admin Principal",
  icon: "eos-icons:admin-outlined",
};

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
  const validations = validationResult(req);
  console.log(validations.errors);

  if (validations.array.length > 0) {
    return await res.render("createUser.ejs", {
      settingGeneral,
      index,
      minibar,
      errors: validations.mapped(),
      old: req.body,
    });
  } else {
    res.redirect("/login");
    console.log("errores de validatios:", validations.mapped);
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
