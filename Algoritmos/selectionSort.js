const livros = require("./livros");
const menorValor = require("./menor");

for(let i = 0;i<livros.length-1;i++){

    let menor = menorValor(livros,i);
    let [livroAtual,livroMenor] = [livros[i],livros[menor]]
    livros[i] = livroMenor
    livros[menor] = livroAtual;
}

console.log(livros)
