const pessoa = {
    nome: 'Luiza',
    profissao:'Cientista da Computação',
};

pessoa.telefone = '75991720277';
pessoa.nome = 'Luiza Oliveira';

const chaves = ['nome','profissao','telefone'];
chaves.forEach((chave)=>{
    console.log(pessoa[chave]);
})