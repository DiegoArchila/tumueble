/* IMPORTS */
const express=require("express");
const app=express();
const methodOverride = require('method-override');

const indexRouter=require("./routes/mainRouts.js");
const cartRouter=require('./routes/cartRouts.js');


/* Settings */
const PORT=process.env.PORT || 3003;
app.use(express.static("public"));

/* Template Engine */
app.set("view engine", "ejs");
app.set("views", "./src/views/");

app.use(express.urlencoded({ extended:false }));
app.use(express.json())

/* Routes Asignations */
app.use(indexRouter);
app.use(cartRouter)

/* 404 */
app.use((req, res, next) => {
	res.status(404).render('not-found');
})

/* Funcionalidad del put y delete */
app.use(methodOverride('_method')) 

/* Start Server */
app.listen(PORT, () => { 
    console.log("Server running in port",PORT);
});