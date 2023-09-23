const ps = require("prompt-sync");
const prompt = ps();

const num1 = Number(prompt("Entre com num1: "));
const num2 = Number(prompt("Entre com num2: "));
operacao(num1,num2);

function operacao(num1,num2){

    console.log(`A soma de ${num1}+${num2}: ${num1+num2}`);
    console.log(`A subtração de ${num1}-${num2}: ${num1-num2}`);
    console.log(`A multiplicação de ${num1}*${num2}: ${num1*num2}`);
    console.log(`A divisão de ${num1}/${num2}: ${num1/num2}`);
}