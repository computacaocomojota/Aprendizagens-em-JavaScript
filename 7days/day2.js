
const prompt = require('prompt-sync')();


console.log("Olá,Usuário!\n");
let nome =  prompt("Qual o seu nome: ");
let idade = prompt(`${nome}, quantos anos você tem: `);
let linguagem = prompt("Qual linguagem de programação você está estudando: ");
console.log(`\nOlá ${nome},você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let respt = prompt(`Você gosta de estudar ${linguagem} ? Responda 1 com o número 1 SIM ou 2 para NÃO: `);

if(respt == 1){
    
    console.log("Muito bom!Continue estudando e você terá muito sucesso.")
} 

else{

    console.log("Ahh que pena... Já tentou aprender outras linguagens ?");

}