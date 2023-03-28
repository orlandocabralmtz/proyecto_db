class DragonBallService {

    constructor() {
        this.personajes = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }

    generateData() {
       this.personajes = [
        {
            "id": "goku",
            "name": "Goku",
            "race": "Saiyan",
            "gender": "Male",
            "bio": "Goku, nacido como Kakarotto, es un Saiyan masculino y el protagonista principal de la serie de Dragon Ball. Goku es un Saiyan originalmente enviado a la Tierra como un bebé con la misión de destruir a su gente. Sin embargo, un accidente altera su memoria, lo que le permite crecer y convertirse en el mejor defensor de la Tierra y el líder informal del Equipo Dragón. Constantemente se esfuerza y entrena para ser el guerrero más grande posible, lo que ha mantenido a la Tierra y al universo a salvo de la destrucción muchas veces",
            "health": "500,000",
            "attack": "50,000",
            "defense": "50,000",
            "kiRestoreSpeed": "50,000",
            "abilities": [
              "Super Saiyan Transformations",
              "Super Kamehameha",
              "Super Dragon Fist"
            ],
            "img": "assets/goku.png",
            "sound": "assets_audio/ultrainstinto.mp3"
          },
          {
            "id": "vegeta",
            "name": "Vegeta",
            "race": "Saiyan",
            "gender": "Male",
            "bio": "Vegeta es el Príncipe de una raza extraterrestre de guerreros conocidos como Saiyans, al igual que el protagonista de la serie, Goku. Vegeta es extremadamente vanidoso y orgulloso, haciendo referencia constantemente a su herencia a lo largo de la serie. Él cree que debería ser considerado el luchador más fuerte del Universo y se obsesiona con superar a Goku después de pelear con él. Después de su derrota ante Goku y los luchadores Z, Vegeta más tarde se une a regañadientes con los héroes para frustrar mayores amenazas al universo. A lo largo de la serie, el papel de Vegeta cambia de villano a antihéroe y luego como uno de los héroes, mientras sigue siendo un rival de Goku. El personaje de Vegeta, particularmente su personalidad, ha sido bien recibido. Él es uno de los personajes más populares de la franquicia de Dragon Ball.",
            "health": "490,000",
            "attack": "49,000",
            "defense": "49,000",
            "kiRestoreSpeed": "49,000",
            "abilities": [
              "Super Saiyan Transformations",
              "Final Flash",
              "Big Bang Attack"
            ],
            "img": "assets/vegeta.png",
            "sound": "assets_audio/vegeta_musica.mp3"
          },
          {
            "id": "gohan",
            "name": "Gohan",
            "race": "Human/Saiyan",
            "gender": "Male",
            "bio": "Gohan es un personaje ficticio en la serie de manga Dragon Ball, creado por Akira Toriyama. Gohan es presentado como el primer hijo del protagonista Goku y su esposa Chi-Chi, en el capítulo #196 Kakarrot, publicado por primera vez en la revista Weekly Shōnen Jump el 8 de octubre de 1988. Chi-Chi es una madre estricta y protectora de Gohan, obligándolo a centrarse en sus estudios y prohibiéndole practicar artes marciales. Sin embargo, debido a las diversas amenazas a la Tierra, ella le permite a regañadientes luchar, y él se convierte en uno de los personajes más fuertes de la serie. Gohan ha sido bien recibido tanto por los fans como por los críticos, estos últimos suelen citar el crecimiento del personaje desde su aparición inicial hasta su derrota de Cell.",
            "health": "440,000",
            "attack": "38,000",
            "defense": "38,000",
            "kiRestoreSpeed": "39,000",
            "abilities": [
              "Super Saiyan Transformations",
              "Super Kamehameha",
              "Masenko"
            ],
            "img": "assets/gohan.png",
            "sound": "assets_audio/silbido_gohan.mp3"
          },
          {
            "id": "trunks",
            "name": "Trunks",
            "race": "Human/Saiyan",
            "gender": "Male",
            "bio": "Trunks tiene el color de cabello lavanda de su abuelo (azul en el manga) y los ojos azules de su madre. Tiene la forma de ojos, características faciales y piel bronceada de su padre, y su cabello se vuelve rubio y sus ojos se vuelven verdes (sin pupilas) cuando se convierte en Super Saiyan. Varios personajes, como Goku, Krillin y Bulma, comentan lo mucho que Trunks se parece a Vegeta. Durante la mayor parte de la Saga de Buu, el Trunks del presente usa un gi verde oscuro, un cinturón naranja, muñequeras naranjas y las mismas botas doradas que usa el Trunks del futuro, también lo usa en la película Bio-Broly. En los eventos de Broly - Second Coming, Trunks lleva una sudadera verde claro de manga larga con una camiseta negra de manga corta debajo con un cuello rojo, pantalones cortos de mezclilla azul índigo y sus botas doradas de su atuendo principal. Luego usa el collar de Maloja. En Dragon Ball Z: La Batalla de los Dioses, Trunks usa overoles y una camiseta azul con muñequeras granate. Al final de Dragon Ball Z, Trunks ahora usa una camisa negra de manga larga, un chaleco dorado, pantalones grises oscuros y las mismas botas doradas que usaba cuando era niño. Luego usa una camiseta sin mangas negra con el logotipo de CAPSULE en el centro de su camisa, pantalones grises y sus botas de cuando era niño.",
            "health": "470,000",
            "attack": "44,000",
            "defense": "43,000",
            "kiRestoreSpeed": "40,000",
            "abilities": [
              "Super Saiyan Transformations",
              "Galic Gun",
              "Finish Buster"
            ],
            "img": "assets/trunks.png",
            "sound": "assets_audio/trunks_espada.mp3"
          },
          {
            "id": "frieza",
            "name": "Frieza",
            "race": "Unknown",
            "gender": "Male",
            "bio": "Frieza, romanizado como Freeza en la mercancía japonesa, los subtítulos en inglés de Funimation y la publicación de Viz Media del manga, es un personaje ficticio en la serie de manga Dragon Ball creada por Akira Toriyama. Frieza hace su debut en el capítulo # 247: Nubes oscuras giran sobre el planeta Namek, publicado por primera vez en la revista Weekly Shōnen Jump el 6 de octubre de 1989, como un tirano galáctico temido como el ser más poderoso del universo. A pesar de no aparecer hasta la segunda mitad del manga, se considera que Frieza es el antagonista más icónico de la franquicia Dragon Ball debido a que sirve eficazmente como el catalizador de muchos de los eventos representados en la historia, como la llegada de Goku a la Tierra, el aterrizaje de los Saiyan en la Tierra y posteriormente, los personajes principales yendo al planeta Namek. En sus apariciones en el manga en sí, también es directamente responsable del asesinato del padre de Goku, Bardock, el genocidio de la raza Saiyan, la muerte de Vegeta y la segunda muerte del mejor amigo de Goku, Krillin, lo que lo convierte en el enemigo más personal y significativo de Goku, y el enfrentamiento final entre Goku y Frieza ha sido aclamado como una de las batallas de manga y anime más memorables de la historia.",
            "health": "475,000",
            "attack": "47,000",
            "defense": "47,000",
            "kiRestoreSpeed": "44,000",
            "abilities": [
              "Eye Laser",
              "Death Beam",
              "Death Ball"
            ],
            "img": "assets/frieza.png",
            "sound": "assets_audio/basta_freezer.mp3"
          },
          {
            "id": "cell",
            "name": "Cell",
            "race": "Android",
            "gender": "Male",
            "bio": "Cell es la creación definitiva del Dr. Gero, quien vino de una línea temporal futura y fue diseñado para poseer todas las habilidades de los mejores luchadores que hayan habitado o visitado la Tierra; el resultado fue un guerrero perfecto, con numerosos rasgos genéticos favorables y habilidades especiales. Él fue uno de los pocos androides de la Cinta Roja que no fue completado directamente por el Dr. Gero; fue completado por la Supercomputadora del Dr. Gero. Es el principal antagonista de las Sagas de Cell Imperfecto, Cell Perfecto y los Juegos de Cell.",
            "health": "200,000",
            "attack": "20,000",
            "defense": "20,000",
            "kiRestoreSpeed": "20,000",
            "abilities": [
              "Energy Shield",
              "Super Kamehameha",
              "Destructo Disk"
            ],
            "img": "assets/cell.png",
            "sound": "assets_audio/cell_terror.mp3"
          }
        ]
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
                const personajeEncontrado = this.personajes.filter(personaje => personaje.id === (id))[0];
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
                const index = this.personajes.findIndex(personaje => personaje.id === (id));
                this.personajes[index] =  personaje;
                resolve();
            }, 1000)
        })
    }

    erase(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.personajes.findIndex(personaje => personaje.id === (id));
                this.personajes.splice(index, 1);    
                resolve();
            }, 1000)
        })
    }
     
    update(id, data){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const index = this.personajes.findIndex(personaje => personaje.id === (id));  //Encuentra el personaje en base al ID
                const oldCharacter = this.personajes[index];  //Lo guarda en oldCharacter
                console.log(oldCharacter)
                const updatedCharacter = { ...oldCharacter, ...data};   // junta los valores usando spread operator 
                console.log(data)
                this.personajes[index] = updatedCharacter;  //actualiza segun el valor de index
                console.log(updatedCharacter)
                resolve();
            }, 1000)
        })
    }
}


module.exports = DragonBallService;