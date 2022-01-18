/* IMPORTS */
const express=require("express");
const app=express();
const indexRouter=require("./routes/mainRouts.js");
const cartRouter=require('./routes/cartRouts.js');

/* Settings */
const PORT=process.env.PORT || 3000;
app.use(express.static("public"));

/* Template Engine */
app.set("view engine", "ejs");
app.set("views", "./src/views/");

app.use(express.urlencoded({ extended:false }));

/* Routes Asignations */
app.use(indexRouter);
<<<<<<< HEAD
=======
app.use(cartRouter)
>>>>>>> 1b7e429948d51f622b6b58a81962ebf4695bcedf


/* Start Server */
app.listen(PORT, () => { 
    console.log("Server running in port",PORT);
});