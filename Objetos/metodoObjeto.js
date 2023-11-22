const cliente = {

    nome: 'João',
    idade: 19,
    email:'joaokvb202345@gmail.com',
};

cliente.endereco = [{
    
    rua:'Sol e Bala',
    bairro:'NSV',
    apartamento: true,
    numero: 256,
}];

const chavesDoObjeto = Object.keys(cliente);
if(!chavesDoObjeto.includes("endereco")){

    console.error('Erro. É necessário ter um endereço cadastrado');
}
