const livros = require("./livros");
const menorValor = require("./menorValor");

let[menor,livroAtual,livroMenor] = [0,livros[0],livros[menor]];

for(let i = 0;i<livros.length-1;i++){
    menor = menorValor(livros,i);
    [livroAtual,livroMenor] = [livros[i],livros[menor]]
    livros[i] = livroMenor
    livros[menor] = livroAtual;
}

console.log(livros)
