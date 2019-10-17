//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumaTots = array1.reduce((acc, cur) => acc + cur, 0);
console.log(sumaTots); //45

//A partir d'un array d'strings i numeros, mostra un string que els continga tots
let array2 = ['a', 1, 'b', 2, 'c', 3];
let concatena = array2.reduce((acc, cur) => acc + cur, '');
console.log(concatena); // a1b2c3

// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
let dies = ['dilluns', 'dimarts', 'dimecres'];
let objecte = dies.reduce((acc, cur, index) => {
    acc[cur] = index
    return acc
}, {}) 
console.log(objecte);

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
let musics = [
    {'nom': 'Joan', 'instrument': 'vocal'},
    {'nom': 'Pep', 'instrument': 'guitarra'},
    {'nom': 'Vicent Lloret', 'instrument': 'guitarra'},
    {'nom': 'Ariadna', 'instrument': 'bateria'},
    {'nom': 'Guillem', 'instrument': 'baix'}
]

                     //ACUMULADODR  //VARIABLE(MUSICO)
let nomsMusics = musics.reduce((acc, unMusic) => acc.concat(unMusic.nom), []);
console.log(nomsMusics);


//CON MAP (MAS FÁCIL)
let altra = musics.map(unMusic => { return unMusic.nom });
console.log(altra);


//Ara que torne un array només amb els noms del musics que toquen la guitarra
let guitarristes = musics.filter((unMusic) => {
    return unMusic.instrument === 'guitarra';
});
console.log(guitarristes.map((unMusic) => unMusic.nom));
//Amb reduce
let guitarristes2 = musics.reduce((llistat, cur) => cur.instrument === 'guitarra' ? llistat.concat(cur.nom) : llistat, [])
console.log(guitarristes2);
//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

    //Agafar l'email, el tel i la web
const contactInfo = users.map(({ email, website, phone }) => ({ email, website, phone }));

console.log(contactInfo);

//-----------------------------------------------------
//A partir d'un arrar de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel"
        },
        productes: [
            {
                id: 1,
                nom: "Taronges"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Joan Mi"
        },
        productes: [
            {
                id: 3,
                nom: "Peres"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Tomas Marin"
        },
        productes: [
            {
                id: 4,
                nom: "Freses"
            }, {
                id: 2,
                nom: "Peres"
            }, {
                id: 1,
                nom: "Platans"
            }
        ]
    }
]

// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on 
// aparega només el client i el producte de la seua comanda.
// Exemple:

//llistatDeComandes => [
//    [
//        { client: 'Manel Viel', productes: 'Taronges' },
//        { client: 'Manel Viel', productes: 'Pomes' }
//    ],
//    [
//        { client: 'Joan Mi', productes: 'Peres' },
//         { client: 'Joan Mi', productes: 'Pomes' }
//     ],
//     [
//         { client: 'Tomas Marin', productes: 'Freses' },
//         { client: 'Tomas Marin', productes: 'Peres' },
//         { client: 'Tomas Marin', productes: 'Platans' }
//     ]
// ]



let nomesComandes = comandes.map(comanda => {
    return comanda.productes.map(producte => { return { client: comanda.client.nom, productes: producte.nom } })
})

console.log("llistatDeComandes => ", nomesComandes);


// otra forma (Almacenandolo en una variable):


let nomesComandes = comandes.map(comanda => {

    let elNom = comanda.client;
    let elProductes = comanda.productes;

    comanda.map(unProducte =>  {{ 'client:' +elNom, 'productes:' +elProductes } })
})

console.log("llistatDeComandes => ", nomesComandes);