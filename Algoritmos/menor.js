const Livros = require("./precosLivros.json") ;
let maisBarato = 0;
for(let i = 0;i<Livros.length;i++){
    if(Livros[i].preco<Livros[maisBarato].preco){
        maisBarato = i
    }
}   
console.log(Livros[maisBarato]);