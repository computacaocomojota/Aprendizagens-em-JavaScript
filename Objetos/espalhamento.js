const cliente = {

    nome: 'João',
    email: 'joaovitor200897@gmail.com',
};

cliente.telefone = ['73994567894','739955647894'];
cliente.enderecos = [{

    rua: 'Sol e Bala',
    bairro: 'Nossa Senhora da Pistola',
    complemento: 'Apartamento',
    numero: 564
},
];


function ligaCliente(telefoneComercial,telefoneResidencial){
    console.log(`Ligando para o telefone comercial: ${telefoneComercial}`);
    console.log(`Ligando para o telefone residencial: ${telefoneResidencial}`)
}

ligaCliente(...cliente.telefone)

const encomenda = {

    nome: cliente.nome,
    ...cliente.enderecos[0],
};
console.log(encomenda)