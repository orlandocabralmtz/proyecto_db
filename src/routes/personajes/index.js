const express = require('express');
const {get, getById, editComplete, newCharacter, erase, update} = require('../../controllers/personajes/index')
const  dragonBall = express.Router();

// getAll
dragonBall.get('/', get);
    
//getID
dragonBall.get('/:id/', getById);

dragonBall.post('/', newCharacter)

dragonBall.put('/:id', editComplete);

dragonBall.delete('/:id', erase)

dragonBall.patch('/:id', update)

module.exports = dragonBall;

