
const products = require("../databases/business/products.json");
const { minibar, index, settingGeneral } =require("../lib/complements.js");
const { create, getUserByEmail } = require("../models/users.js");
const { toCOP } = require("../lib/formats.js");

const home = async (req, res) => {
  try {
    if(req.session.user!=undefined){
      await res.render("index.ejs", {
        settingGeneral,
        index,
        toCOP,
        user:req.session.user
      });
    } else {
      await res.render("index.ejs", {
        settingGeneral,
        index,
        toCOP
      });
    }
  } catch (error) {
    throw error;
  }
};

const login = async (req, res) => {
  index.title = "login";

  try {
    console.log("req.session.user :",req.session.user);
    console.log("req.session.admin :",req.session.admin);
    if(req.session.user!=undefined){
      return await res.render("index.ejs", {
        settingGeneral,
        index,
        minibar,
        user:req.session.user,
        admin:req.session.admin
      });
    }else {
      await res.render("login.ejs", {
        settingGeneral,
        index,
        minibar
      });
    }
  } catch (error) {
    throw error;
  }
};

const createUser = async(req, res) => {

  try {
    create(req.body);
    await res.redirect("/login");
  } catch (error) {
    throw error;
  }

};

const showCreateUser = async (req, res) => {
  try {
    if(req.session.user!=undefined){
      await res.render("index.ejs", {
        settingGeneral,
        index,
        minibar,
        user:req.session.user
      });
    } else {
      res.render("createUser.ejs", {
        settingGeneral,
        index,
        minibar,
      });
    }  
  } catch (error) {
    throw error;
  }
};

const validateUser= async(req,res)=>{

  try {
    let user= await getUserByEmail(req.body.email);
    req.session.user=user.id;

    if(user.isAdmin){
      req.session.admin=true;
    }

  } catch (error) {
    throw error;
  
  } finally {
    res.redirect("/");
  }

}

module.exports = {
  home,
  login,
  showCreateUser,
  createUser,
  validateUser
};
