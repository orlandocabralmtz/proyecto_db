const DragonBallService = require('../../services/personajes/index');  // la clase que viene de services
const dragonBallService = new DragonBallService();  // se crea la instancia 

const get = async (req, res) => {
    try {
      // console.log(pokemonService.queryAll()) // Promise.pending
      const personajes = await dragonBallService.queryAll();
      res.status(200).json(personajes);
    } catch(error) {
      res.status(404).json( { message: 'no hay personaes' } );
    }
  
}

const getById = async (req, res) =>{ 
    try {
      const id = req.params.id;
      const  personajes = await dragonBallService.getById(id);
      res.status(200).json(personajes);
    } catch(error) {
      res.status(404).json({message: ' personaje no encontrado'})
    }
}

const editComplete = async(req, res) =>{
  try {
    const id = req.params.id;
    const personaje = req.body;
    dragonBallService.editComplete(id, personaje);
    res.status(200).send();
  } catch(error){
    res.status(404).json({message: 'la edición no pudo ser completada'})
  }
}

const newCharacter = async(req, res) =>{
  try{
    const personaje  = req.body;
    dragonBallService.new(personaje);
    res.status(200).send();
  } catch(error){
    res.status(404).json({message: 'NO se pudo crear el nuevo personae'})
  }
}


const erase = async (req, res) => {
  try{
    const id = req.params.id;
    dragonBallService.erase(id);
    res.status(200).send();
  } catch(error){
    res.status(404).json({message: 'no se pudo elimar el personaje'})
  }
}
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body
    dragonBallService.update(id, data)
    res.status(200).send();
  } catch(error){
    res.status(404).json({ message : 'no se pudo actualizar la información'})
  }
}



module.exports = {
    get,
    getById,
    editComplete,
    newCharacter,
    erase,
    update
}