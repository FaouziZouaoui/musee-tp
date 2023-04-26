const express = require("express");
const route = require("./route")
const routeUser = require("./route-user") 
const routeConnexion = require("./route-connexion") 
const {connect} = require("mongoose");
const mongoose = require ("mongoose") ;
require("dotenv").config();

const URI = process.env.BDD_DEV

mongoose.set("strictQuery" , true);
connect(URI, {useNewUrlParser : true})
    .then(() => console.log("connexion à MongoDB réussie"))
    .catch((ex) => console.log(ex))
const PORT = 4000 ;

const app = express()

app.use(express.json()) ;  

app.use(routeConnexion); 
app.use(route) ; 
app.use("/user" ,routeUser) ;  


app.listen(PORT , () => console.log(`express start sur port ${PORT}`));