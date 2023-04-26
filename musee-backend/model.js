const { Schema , model } = require("mongoose")


const userSchema = new Schema({
    email : String ,  
    password : String ,
    role : { type : String , enum : ['redacteur' , 'admin'] }
})

const User = model("users" , userSchema);


const oeuvreSchema = new Schema({
    nom : String,
    description : String,
    image : String,
    auteur : String,
    dt_creation : Date
})


const Oeuvre = model("oeuvre", oeuvreSchema );


module.exports.User = User ; 
module.exports.Oeuvre = Oeuvre ;