const cliente = {
    nome: 'João',
    idade: 19,
};

cliente.telefone = ['75991026587','75998763456'];

cliente.enderecos = [{
    rua: 'Alameda das Palmeiras',
    bairro: 'Alto das Primaveras',
    numero: 24,
    apartamento: false,
}];

cliente.enderecos.push({
        rua: 'Sol e Mar',
        bairro: 'Nossa Senhora da Pistola',
        numero: 204,
        apartamento: true,
});

const apenasApartamento = cliente.enderecos.filter(
    
    (enderecos)=> enderecos.apartamento === true
);

console.log(apenasApartamento);
