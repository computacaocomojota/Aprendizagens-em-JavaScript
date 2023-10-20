const cliente = {
    name: 'João',
    idade: 19,
    cpf: '555.125.987-76',
    email: 'joaovitor2004568@gmail.com',
}

const chaves = ['name','idade','cpf','email'];
chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});