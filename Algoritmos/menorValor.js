const Livros = require("./livros") ;
function menorValor(lista,posicao){

    let indexMaisBarato = posicao;
    for(let i = posicao;i<lista.length;i++){
        if(lista[i].preco<lista[indexMaisBarato].preco){
            indexMaisBarato = i
        }
    }
    return indexMaisBarato;
}
module.exports = menorValor; 