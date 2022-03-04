const settingGeneral = require("../databases/settingGeneralSite.json");
const index = require("../databases/index.json");

/**MiniBanner
 * For more information see /wiews/partials/miniBanner.ejs
 */
 minibar = {
    title: "Admin Principal",
    icon: "eos-icons:admin-outlined",
  };

  module.exports={
      minibar,
      settingGeneral,
      index
  }