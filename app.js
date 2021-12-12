const express=require("express");
const path=require("path");
const app=express();

const port=3030;

const pathPublic=path.resolve(__dirname,"./public");
const pathViews=path.resolve(__dirname,"./views");

app.use(express.static(pathPublic));

app.get("/", (req, res) => res.sendFile(path.resolve(pathViews, "index.html")));
app.get("/login", (req, res) => res.sendFile(path.resolve(pathViews, "login.html")));
app.get("/signup", (req, res) => res.sendFile(path.resolve(pathViews, "signup.html")));
app.get("/products", (req, res) => res.sendFile(path.resolve(pathViews, "products.html")));
app.get("/cart", (req, res) => res.sendFile(path.resolve(pathViews, "cart.html")));

app.listen(port, console.log("Server runing at the port",port));