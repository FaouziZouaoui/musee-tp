const { Router } = require("express")
const { Oeuvre } = require("./model") 

const {idValid , isValidOeuvre , autorisation , isAdmin } = require("./middleware")

const route = Router();
route.get("/", function(request, reponse){
    reponse.json({msg : "fonction"})
})
route.post("/" , autorisation ,  async function(request, reponse){
    const { body } = request; 
    const newOeuvre = new Oeuvre(body) 
    await newOeuvre.save() 
    reponse.json(newOeuvre); 
})

route.get("/all" , async (request, reponse) => {
   const toutesLesOeuvres = await Oeuvre.find()
   reponse.json(toutesLesOeuvres); 
})


route.delete("/:id" , [autorisation, isAdmin , idValid] ,  async (request, reponse) => {
    const id = request.params.id ;
    const reponseMongo = await Oeuvre.findByIdAndRemove(id) 

    if(!reponseMongo) return reponse.status(404).json({ msg : `l'oeuvre ${id} n'existe pas` })

    reponse.json({ msg : `l'oeuvre ${id} est bien supprimé` }); 
} )


route.get("/:id", idValid , async (request , reponse) => {
    const id = request.params.id ;
    const oeuvreRecherche = await Oeuvre.findById(id)

    if(!oeuvreRecherche) return reponse.status(404).json({ msg : `l'oeuvre ${id} n'existe pas` })

    reponse.json(oeuvreRecherche);
})

route.put("/:id" , [ idValid, isValidOeuvre ] , async (request , reponse) => {
    const id = request.params.id ;
    const { body } = request ;
    const oeuvreUpdated = await Oeuvre.findByIdAndUpdate(id , { $set : body } , { new : true})
    if(!oeuvreUpdated) return reponse.status(404).json({ msg : `l'oeuvre ${id} n'existe pas` }) ; 

    reponse.json(oeuvreUpdated)
})

module.exports = route ; 