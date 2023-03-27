const routerDragonBall = require('./personajes/index');
// const routerTrainers = require('../routes/traners/index');
// cities
// gyms

const routerApi = (app) => {
    app.use('/personajes', routerDragonBall);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;