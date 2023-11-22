const pessoal = {

    nome: 'João',
    idade: 19,
    signo: 'Peixes',
    aniversario: '19/02/2004',
    telefone: '7199564789',
};

const profissional = {

    curso: 'Ciência da Computação',
    semetre: '2º Semestre',
    objetivo: 'Entrar na TecnoJr em 2024',
};

const joao = {

    ...pessoal,
    ...profissional,
};
console.log(joao)