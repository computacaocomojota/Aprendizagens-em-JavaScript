const notas = [10,9.5,7,8.7];

const notasAtualizdas = notas.map((notas) => {
    return (notas+1>=10) ? 10 : notas+1
})
console.log(notasAtualizdas);