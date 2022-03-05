const settingPages = "../databases/settingGeneralSite.json";
const indexRout = "../databases/index.json";
const { toObject } = require("./formats.js");

/**MiniBanner
 * For more information see /wiews/partials/miniBanner.ejs
 */
const minibar = {
  title: "Admin Principal",
  icon: "eos-icons:admin-outlined",
};

/**
* settingGeneralSite contain information from the struct of the head.
*
* settingGeneralSite {
*  languaje: lanjuaje of the site (See the settingGeneralSite.json)
*  title: title of the page
* }
*/
const settingGeneral = toObject(settingPages); 

/**
 * Index contain information from title the page.
 *
 * index {
 *  name: name of the project
 *  title: title of the page
 * }
 */
const index = toObject(indexRout);


module.exports={
    minibar,
    settingGeneral,
    index
}