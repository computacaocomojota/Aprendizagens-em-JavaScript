
const prompt = require('prompt-sync')();

let operacao = prompt("Qual operação: ");
let num1 = Number(prompt("Entre com num1:"));
let num2 = Number(prompt("Entre com num2: "));


switch (operacao){

  case "+" : 
  console.log(soma(num1,num2));
  break;
    
  case "-" : 
  console.log(subtracao(num1,num2));
  break;
    
  case "*" :
  console.log(multiplicacao(num1,num2));
  break;
    
  case "/" : 
  console.log(divisao(num1,num2));
  break;

  default: 
  console.log("Até a Próxima");
  break;
}

function soma(num1,num2){
  return num1+num2;
}
function subtracao(num1,num2){
  return num1-num2;
}

function multiplicacao(num1,num2){
  return num1*num2
}

function divisao(num1,num2){
  return num1/num2;
}