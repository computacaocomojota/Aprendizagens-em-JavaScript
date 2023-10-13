const notas = [10,6.5,8,7.5]
let soma = 0;
let media;

for(let nota of notas){
   soma+=nota;
}
 media = soma/notas.length
console.log(`A média é: ${media}`);