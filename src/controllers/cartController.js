const { toCOP, toObject } =require("../lib/formats.js");
/**cart.json contain information from the Cart shop.
 * 
 * cart {
 *  id: Identifiquer of the product.
 *  name: name of the product.
 *  urlImg: rout from the imagen of the product
 *  units: number of units of the product
 *  taxes: taxes applied to the product
 *  priceGross: cost gross of the product
 *  priceFinal: price final of the product
 *  discount: discount applied to the product 
 * }
*/
const cart=toObject("../databases/business/cart.json");
const { minibar, index, settingGeneral } =require("../lib/complements.js");

/**
 * contains the sum of the order
 * 
 */
const totalOrder=0;

module.exports= {
    cart: async (req,res)=> {
        try {
            if(req.session.user!=undefined){
                await res.render("cart.ejs", {
                    index,
                    settingGeneral,
                    cart,
                    toCOP,
                    totalOrder,
                    minibar,
                    user:req.session.user
                });
            } else {
                await res.redirect("/login")
            }
        } catch (error) {
            throw error;
        }
    }
};