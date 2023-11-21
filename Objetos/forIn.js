const cliente = {
    nome: 'João',
    idade: 19,
    telefone: ['75991377277','75992947299'],
};
cliente.endereco = {
    rua: 'Alameda das Acácias',
    bairro: 'Alto das Orquídeas',
    apartamento: false,
    numero: 14,
    complemento: 'Casa',
};

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){
    console.log(`${chave}: ${cliente[chave]}`);
    } 
}