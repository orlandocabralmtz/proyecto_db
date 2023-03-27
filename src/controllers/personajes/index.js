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



module.exports = {
    get,
}