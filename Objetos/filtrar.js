const clientes = require("./clientes.json");

function filtroSemApartamento(clientes){

    return clientes.filter((cliente)=>{

        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
            );
    });
}

const filtrado = filtroSemApartamento(clientes);
console.log(filtrado);