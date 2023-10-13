const notas = [10,25,50,100];
let maior = 0;
notas.forEach(function(valor,indice){

    if(valor>maior){

        maior = indice;
        console.log(maior);
    }
})

console.log(`O maior valor está na posição: ${maior}`);