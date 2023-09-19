"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const num = [];
const n = Number(prompt("Entre com o Tamanho da Lista: "));
for(let i = 0;i<n;i++){

    let m = Number(prompt("Entre com os Valores: "));
    num[i] = m;
}
console.log(num);