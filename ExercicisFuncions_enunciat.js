//Executeu este codi i mireu el que mostra per consola

let dies=["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres","Dissabte","Diumenge"];
function paraCada(array, accio){
    for(let i=0;i<array.length;i++){
        accio(array[i]);
    }
}
paraCada(dies,console.log);

//Modifiqueu-lo per a que faça el mateix utilitzant una funció fletxa (=>)
console.log("----------------------------------");

const paraCada = (array, accio) =>{
    for(let i=0;i<array.length;i++){
        accio(array[i]);
    }
}
paraCada(dies,console.log);



//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()
console.log("----------------------------------");

dies.forEach(function(dia){
console.log(dia)

})



// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...

console.log("----------------------------------");

for (i=0; i<dies; i++)
{

    let str = (dies[i].length);

    console.log (dies[i]+ ":" +str)
}


//Con la función map:
console.log("----------------------------------");



let rdo = dies.map(unDia =>{return unDia.length});
console.log(rdo);
//RESULTADO: > Array [7, 7, 8, 6, 9, 8, 8]

console.log("----------------------------------");



let rdo = dies.map(unDia =>{return unDia.length});
dies.forEach((unDia,pos) =>{console.log(unDia+":" +rdo[pos])})
//RESULTADO:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...

//Mostra els dies que ténen més de 7 caracters (filter)
console.log("----------------------------------");

for (i=0; i<dies; i++)
{

    let str = (dies[i].length);

    if (str >= 7)
    {
    console.log (dies[i]+ ":" +str)
    }
}

//CON FUNCION FILTER:
console.log("----------------------------------");

function teMesDe (unDia, numCarMax)
{
	
    return unDia.length > numCarMax;
}

console.log(dies.filter((unDia)=> teMesDe (unDia,7)));

//CON FUNCION FILTER FIJA:
console.log("----------------------------------");

function teMesDe (unDia)
{

    return unDia.length > 7;
}
console.log(dies.filter(teMesDe));

/////////


/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */
/* reduce */

console.log("----------------------------------");

let aux = "";

for (i=0; i<dies.length; i++)
{

    let str = (dies[i].length);

    if (str >= 7)
    {
    aux = aux + dies[i]+ " , ";
    }
}

// CON LA FUNCION REDUCTION:

console.log("----------------------------------");

function teMesDe (unDia, value)
{
	
    return unDia.length + value;
}

console.log(dies.reduce((unDia)=> teMesDe (unDia,value)));

