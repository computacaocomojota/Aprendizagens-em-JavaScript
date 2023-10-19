const salaJS = [10,5,8,9,3];
const salaJava = [9,6,7,8,9];
const salaPython = [5,6,8,7,10];

const mediaJS = soma(salaJS)
const mediaJava = soma(salaJava);
const mediaPython = soma(salaPython);

function soma(notasDaSala){

   const retorno = notasDaSala.reduce((acc,nota)=> acc+nota,0);
   return retorno/notasDaSala.length
}

console.log(`A média de JavaScript é: ${mediaJS}`);
console.log(`A média de Java é: ${mediaJava}`);
console.log(`A média de Python é: ${mediaPython}`);