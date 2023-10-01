const numeros = [100,200,300,400,500,600];
exibe(numeros);
function exibe(numeros){

for(let i = 0;i<numeros.length;i++){

    let y = numeros.indexOf(numeros[i]);
    console.log(numeros[i]);
    console.log(y)
}
}