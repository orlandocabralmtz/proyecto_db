const express = require('express');
const {get, getById, editComplete, newCharacter, erase} = require('../../controllers/personajes/index')
const  dragonBall = express.Router();

// getAll
dragonBall.get('/', get);

//getID
dragonBall.get('/:id/', getById);

dragonBall.post('/', newCharacter)

dragonBall.put('/:id', editComplete);

dragonBall.delete('/:id', erase)

module.exports = dragonBall;

