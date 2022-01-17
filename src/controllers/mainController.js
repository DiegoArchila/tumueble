const dirDatabases="../databases/";
const settingGeneral= require("../databases/settingGeneralSite.json");
const index= require("../databases/index.json");

module.exports= {
    index: (req,res) => {
        res.render("index.ejs", {
            settingGeneral,
            index
        });
    },
    login: (req,res) => {
        res.render("login.ejs");
    }
}