"use strict"
const ps = require("prompt-sync");
const prompt = ps();

let tempi = Number(prompt("Entre com a temperatura: "));
let hot = temp(tempi);

function temp(Number){

    return (9*tempi+160)/5 
}

console.log(`A temperatura ${tempi}°C em °F é: ${hot}`);