const precosLivros = [25,15,30,50,45,20];
let maisBarato = precosLivros[0];
precosLivros.forEach((value)=> {
    maisBarato = (value<maisBarato) ? value : maisBarato;
})
console.log(maisBarato);
