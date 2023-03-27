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
}


module.exports = DragonBallService;