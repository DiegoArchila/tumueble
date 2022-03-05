const products=require("../databases/business/products.json");
const orders=require("../databases/business/orders.json");
const { minibar, index, settingGeneral } =require("../lib/complements.js");
const {toCOP} =require("../lib/formats.js");
const { findByPk } = require("../models/users.js");

module.exports = {
  admin: async(req, res) => {
     return await res.render("./admin/index.ejs", {
      index,
      settingGeneral,
      toCOP,
      minibar,
      orders,
      user:req.session.user,
      admin:req.session.admin
    });
  },
  products: async(req, res) => {
    return await res.render("./admin/products.ejs", {
      index,
      settingGeneral,
      minibar,
      toCOP,
      products,
      user:req.session.user,
      admin:req.session.admin
    });
  },
  createProduct: async(req, res) => {
    return await res.render("./admin/createProduct.ejs", {
      index,
      settingGeneral,
      minibar,
      toCOP,
      user:req.session.user,
      admin:req.session.admin
    });
  },
  user: async(req, res) => {
    try {
      const userData= await findByPk(req.session.user);
      console.log("usuario:", userData);
    return await res.render("./admin/adminUser.ejs", {
      index,
      settingGeneral,
      minibar,
      user:req.session.user,
      admin:req.session.admin,
      userData
    });  
    } catch (error) {
      throw error;
    }
    
  },
  components: async(req, res) => {
    return await res.render("./admin/components.ejs", {
      index,
      settingGeneral,
      minibar,
      user:req.session.user,
      admin:req.session.admin
    });
  },
};
