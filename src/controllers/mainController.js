const dirDatabases="../databases/";
const settingGeneral= require("../databases/settingGeneralSite.json");
const index= require("../databases/index.json");

/**MiniBanner
* For more information see /wiews/partials/miniBanner.ejs
*/
minibar = {
    title: "Admin Principal",
    icon: "eos-icons:admin-outlined",
}

const home = async (req,res) => {
    index.title="home";
    try {
        await res.render("index.ejs", {
            settingGeneral,
            index
        });
    } catch (error) {
        throw error;
    }
}

const login = async (req,res) => {
    index.title="login";
    try {
        await res.render("login.ejs", {
            settingGeneral,
            index,
            minibar
        });   
    } catch (error) {
        throw error   
    }
}

const createUser = async (req,res) => {
    try {
        await res.render("createUser.ejs", {
            settingGeneral,
            index,
            minibar
        });   
    } catch (error) {
        throw error   
    }
}

module.exports= {
    home,
    login,
    createUser
}    