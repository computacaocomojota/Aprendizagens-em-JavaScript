
const prompt = require('prompt-sync')();


let frutas = [];
let congelados = [];
let laticinios = [];
let doces = [];
let verfica = 1;
let val = 0;
let i = 0;

for(let i = 0; verfica!=0; i++){

    let verfica = prompt("Adicionar item: ");
    if(verfica==0) break;
    let comida = prompt("Qual comida: ");
    let lista = prompt("Em qual lista: ");

    switch(lista){

        case "Frutas": 
        frutas[i] = comida;
        val++;
        break;

        case "Congelados":
        congelados[i] = comida;
        val++;
        break;

        case "Laticinios": 
        laticinios[i] = comida;
        val++
        break;

        case "Doces":
        doces[i] = comida;
        val++;
        break;
    }
}
console.log("Lista de Compras: ");
console.log(`Frutas: ${frutas}`)
console.log(`Congelados: ${congelados}`) 
console.log(`Laticínios: ${laticinios}`) 
console.log(`Doces: ${doces}`) 