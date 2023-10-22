const cliente = {
    nome: 'João',
    idade: 19,
    email: 'joaovitor808569@gmail.com',
    saldo: 200,
    efetuaPagamento : function (valor) {

    if(valor>this.saldo) {
    console.log("Saldo Insuficiente");
    }
    else{
        this.saldo -= valor;
        console.log(`Pagamento realizado. Novo Saldo: ${this.saldo}`)
    }
}
};
cliente.efetuaPagamento(25);
