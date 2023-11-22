const dados = require("./cliente.json");

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log(clienteEmString.nome);

const obejetoCliente = JSON.parse(clienteEmString);
console.log(obejetoCliente);
console.log(typeof obejetoCliente);