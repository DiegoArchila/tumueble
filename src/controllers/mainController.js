const dirDatabases="../databases/";
const settingGeneral= require("../databases/settingGeneralSite.json");
const index= require("../databases/index.json");

module.exports= {
    index: (req,res) => {
        index.title="home";
        res.render("index.ejs", {
            settingGeneral,
            index
        })
    }
}