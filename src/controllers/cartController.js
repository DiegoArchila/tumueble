/**Index contain information from title the page.
 * 
 * index {
 *  name: name of the project
 *  title: title of the page
 * }
*/
const index=require("../databases/index.json");
index.title="Cart";

/**settingGeneralSite contain information from the struct of the head.
 * 
 * settingGeneralSite {
 *  languaje: lanjuaje of the site (See the settingGeneralSite.json)
 *  title: title of the page
 * }
*/
const settingGeneral=require("../databases/settingGeneralSite.json");

module.exports= {
    cart: (req,res)=> res.render("cart.ejs", {
        index,
        settingGeneral
    })
};