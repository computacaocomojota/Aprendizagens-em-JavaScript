const Livros = require("./livros") ;
function menorValor(listaProdutos,posicao){

    let indexMaisBarato = posicao;
    for(let i = posicao;i<listaProdutos.length;i++){
        if(listaProdutos[i].preco<listaProdutos[indexMaisBarato].preco){
            indexMaisBarato = i
        }
    }
    return indexMaisBarato;
}
module.exports = menorValor; 