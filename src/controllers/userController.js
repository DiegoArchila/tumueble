const { minibar, index, settingGeneral } =require("../lib/complements.js");
const userOrders=require("../databases/business/usersOrders.json");
const { toCOP } = require("../lib/formats.js");
const { user } = require("./adminController.js");

module.exports={
    dashboard:async(req,res) =>{
        try {
            await res.render("./user/index.ejs", {
                minibar,
                settingGeneral,
                index,
                orders:userOrders,
                toCOP,
                user:req.session.user,
                admin:req.session.admin
            });
        } catch (error) {
            throw error;
        }
    }
}