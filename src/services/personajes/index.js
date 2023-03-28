class DragonBallService {

    constructor() {
        this.personajes = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }

    generateData() {
        this.personajes = [
            { id: 1, name: 'Goku', type: 'Sajajin' },
            { id: 2, name: 'Krilin', type: 'Humano'},
            { id: 3, name: 'Gohan', type: 'hibrido' },
        ];
    }



    
    queryAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.personajes); // try
                // reject catch
            }, 1000);
        });
    }
    
    getById(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const personajeEncontrado = this.personajes.filter(personaje => personaje.id === parseInt(id))[0];
                resolve(personajeEncontrado);
            }, 1000)
        })
    }


    new(newCharacter){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                this.personajes.push(newCharacter);
                resolve();
            }, 1000)
        })
    }

    editComplete(id, personaje){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.personajes.findIndex(personaje => personaje.id === parseInt(id));
                this.personajes[index] =  personaje;
                resolve();
            }, 1000)
        })
    }

    erase(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.personajes.findIndex(personaje => personaje.id === parseInt(id));
                console.log(index)
                this.personajes.splice(index, 1);    
                resolve();
            }, 1000)
        })
    }
}


module.exports = DragonBallService;