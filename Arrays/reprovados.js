const alunos = ['Ana','Marcos','Maria','Mauro'];
const notas = [7,4.5,8,7.5]

const reprovados = alunos.filter((aluno,indice)=>{
    return (notas[indice]<7) ? aluno : 0;
})

console.log(reprovados);