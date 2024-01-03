const livros = require("./livros");

console.log('Antes de Ordenar:',livros)
function insertionSort(lista){

    for(let atual = 0;atual<lista.length;atual++){
        let analise = atual;
            while(analise>0 && lista[analise].preco<lista[analise-1].preco){
                
                let [itemAnalise,itemAnterior] = [lista[analise],lista[analise-1]]

                lista[analise] = itemAnterior;
                lista[analise-1] = itemAnalise;

                analise--;
            }
    }
    return lista;
}

const livrosOrdenados = insertionSort(livros);
console.log('Depois de Ordenados:',livrosOrdenados);

