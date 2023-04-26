const Joi = require("joi")


const schemaJoiUser = Joi.object({
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password : Joi.string().required(),
    role : Joi.string().valid("redacteur","admin").required()
});

const schemaLogin = Joi.object({
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password : Joi.string().required()
});


const schemaOeuvreJoi = Joi.object({ 
    nom : Joi.string().min(5).max(255).required(),
    description : Joi.string().min(5).max(10000).required(),
    image : Joi.string().min(5).max(500).required(),
    auteur : Joi.string().min(5).max(255).required(),
    dt_creation : Joi.date()
})

module.exports.schemaJoiUser = schemaJoiUser ;
module.exports.schemaOeuvreJoi = schemaOeuvreJoi ;
module.exports.schemaLogin = schemaLogin ;
