const dadesUsuaris = [
{
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: {
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
geo: {
lat: "-37.3159",
lng: "81.1496"
}
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
company: {
name: "Romaguera-Crona",
catchPhrase: "Multi-layered client-server neural-net",
bs: "harness real-time e-markets"
}
},
{
id: 2,
name: "Ervin Howell",
username: "Antonette",
email: "Shanna@melissa.tv",
address: {
street: "Victor Plains",
suite: "Suite 879",
city: "Wisokyburgh",
zipcode: "90566-7771",
geo: {
lat: "-43.9509",
lng: "-34.4618"
}
},
phone: "010-692-6593 x09125",
website: "",
company: {
name: "Deckow-Crist",
catchPhrase: "Proactive didactic contingency",
bs: "synergize scalable supply-chains"
}
},
{
id: 3,
name: "Clementine Bauch",
username: "Samantha",
email: "Nathan@yesenia.net",
address: {
street: "Douglas Extension",
suite: "Suite 847",
city: "McKenziehaven",
zipcode: "59590-4157",
geo: {
lat: "-68.6102",
lng: "-47.0653"
}
},
phone: "1-463-123-4447",
website: "ramiro.info",
company: {
name: "Romaguera-Jacobson",
catchPhrase: "Face to face bifurcated interface",
bs: "e-enable strategic applications"
}
},
{
id: 4,
name: "Patricia Lebsack",
username: "Karianne",
email: "Julianne.OConner@kory.org",
address: {
street: "Hoeger Mall",
suite: "Apt. 692",
city: "South Elvis",
zipcode: "53919-4257",
geo: {
lat: "29.4572",
lng: "-164.2990"
}
},
phone: "493-170-9623 x156",
website: "kale.biz",
company: {
name: "Robel-Corkery",
catchPhrase: "Multi-tiered zero tolerance productivity",
bs: "transition cutting-edge web services"
}
},
{
id: 5,
name: "Chelsey Dietrich",
username: "Kamren",
email: "Lucio_Hettinger@annie.ca",
address: {
street: "Skiles Walks",
suite: "Suite 351",
city: "Roscoeview",
zipcode: "33263",
geo: {
lat: "-31.8129",
lng: "62.5342"
}
},
phone: "(254)954-1289",
website: "",
company: {
name: "Keebler LLC",
catchPhrase: "User-centric fault-tolerant solution",
bs: "revolutionize end-to-end systems"
}
}
]

//Obtenir un llistat amb l'id, nom i email dels usuaris
/* [
    { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
...
] */





//fer-ho amb map


const contactInfo = dadesUsuaris.map(({ id, nom, email }) => ({ id, nom, email }));

console.log(contactInfo);






//fer-ho amb reduce
let listadoUsuarios = dadesUsuaris.reduce((acc, unUsuario) => {
    let objeto = ({'id': usuario.id, 'nom': usuario.nom, 'email':usuario.email });
   // acc.concat(unUsuario.id, unUsuario.name, unUsuario.email), []);
});
console.log(concat.objeto);




//Modificar address per a que l'adreça aparega en forma d'string amb el format:
// street suite
// zipcode city
//Exemple: 
/* {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    address: 'Kulas Light Apt. 556\n        92998-3874 Gwenborough'
   },
   {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    address: 'Victor Plains Suite 879\n        90566-7771 Wisokyburgh'
    } */



//Tornar un array amb els id d'aquelles empreses que no tenen website
//[ { id: 2 }, { id: 5 } ]
console.log("-----------------");

const result = dadesUsuaris.filter((datoUsuario) => datoUsuario.website === "");

console.log(result.map((datoUsuario) => ({'id':datoUsuario.id})));


//Crear una funció que donat un objecte usuari, em diga si la website esta buida o no


function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = objeto.website === "";
    for (var i in objeto) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objeto.hasOwnProperty(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
      }
    }
    return resultado;
  }
  console.log(mostrarPropiedades(objeto, "1") );


//Crear una funció que donat un usuari em torne un objecte id

console.log("-----------------");
//amb un reduce, tornar un array amb els id d'aquelles empreses que no tenen website
//[{ id: 2 }, { id: 5 }]
console.log("-----------------");
//reduce en una sola línia
// [ { id: 2 }, { id: 5 } ]
console.log("-----------------");