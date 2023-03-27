const express = require('express');
const { get} = require('../../controllers/personajes/index')
const  dragonBall = express.Router();

// getAll
dragonBall.get('/', get);



module.exports = dragonBall;

