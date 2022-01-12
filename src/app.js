/* IMPORTS */
const express=require("express");
const app=express();
const indexRouter=require("./routes/mainRouts.js");

/* Settings */
const port=3030;
app.use(express.static("public"));

/* Template Engine */
app.set("view engine", "ejs");
app.set("views", "./src/views/");

/* Routes Asignations */
app.use(indexRouter);


/* Start Server */
app.listen(port, () => { 
    console.log("Server running in port ",port);
});