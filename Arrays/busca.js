const ps = require("prompt-sync");
const prompt = ps();

const alunos = ['João','Juliana','Ana','Caio'];
const notas = [10,8,7.5,9];
const alunosnotas = [alunos,notas];

let alunonome = prompt("Entre com um nome: ");
exibe(alunonome);

function exibe(aluno){

    if(alunosnotas[0].includes(aluno)){
    
        const [alunos,medias] = alunosnotas;
        console.log(`${aluno} está na lista`);
        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`A média de ${aluno} foi: ${media}`);
    }
    else {
        console.log(`${aluno} não está cadastrado`);
    }
}