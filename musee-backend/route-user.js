
const { Router, response } = require("express")
const { User } = require("./model") 
const { schemaJoiUser } = require("./verif") 
const {genSalt , hash } = require("bcrypt"); 
const { isValidObjectId } = require("mongoose")

const route = Router()


route.post("/", async (request, reponse) => {

    const {body} = request ;
    const {error} = schemaJoiUser.validate(body , {abortEarly : false});
    if(error) return reponse.status(400).json(error.details);

    const userRecherche = await User.find({email : body.email}); 

    if(userRecherche.length > 0) return reponse.status(400).json({ msg : "email déjà pris" });

    const salt = await genSalt(10)
    const passwordHashe = await hash(body.password , salt)


    const userACreer = new User({ ...body , password : passwordHashe })

    await userACreer.save()


    reponse.json({msg : "profil user créé"}) 
                             
})

/*
{
    "email" : "a@yahoo.fr" ,
    "password" : "123456"
}
*/


route.get("/all" , async (request , reponse) => {
    const allUsers = await User.find({}).select({ _id : 1 , email : 1 , role : 1})
    reponse.json(allUsers); 
})

route.delete("/:id", async (request , reponse) => {
    const id = request.params.id ; 
    if(!isValidObjectId(id)) return reponse.status(400).json({msg : `id ${id} est invalide`})
    const profilASupprimer = await User.findByIdAndRemove(id)
    if(!profilASupprimer) return reponse.status(404).json({msg : `Profil introuvable avec l'id mentionné : ${id}`})
    reponse.json({msg : `profil ${id} est supprimé`})
})


module.exports = route ; 
