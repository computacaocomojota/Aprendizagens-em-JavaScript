const cliente = {
    name: 'João',
    idade: 19,
    CPF: '555.156.895-79',
    Email:'joaovitor2004568@gmail.com' 
}

console.log(`O nome do cliente é ${cliente.name} e possui ${cliente.idade} anos.`)
console.log(`Os primeiros números do CPF de ${cliente.name} são ${cliente.CPF.substring(0,3)}`)