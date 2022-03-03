/* IMPORTS */
const express = require("express");
const { encrypt } = require("./lib/formats.js")
const app = express();
const indexRouter = require("./routes/mainRouts.js");
const cartRouter = require("./routes/cartRouts.js");
const adminRouter = require("./routes/adminRouts.js");
const productsRouter = require("./routes/productsRouts.js");
const session = require("express-session");

/* Settings */
const PORT = process.env.PORT || 3003;
app.use(express.static("public"));
app.use(session({secret:encrypt(Date.now().toString())}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/* Template Engine */
app.set("view engine", "ejs");
app.set("views", "./src/views/");


/* Routes Asignations */
app.use(indexRouter);
app.use(cartRouter);
app.use(adminRouter);
app.use(productsRouter);

/* Start Server */
app.listen(PORT, () => {
  console.log("Server running in port", PORT);
});
