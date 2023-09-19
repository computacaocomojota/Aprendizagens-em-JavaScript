
const prompt = require('prompt-sync')();

let num = Math.floor(Math.random()*11);
let acerto = Number;
let i = 3;
while(i!=0){

    acerto = prompt("Entre com o número: ");
    if(acerto==num){
        
        console.log("Você Acertou!");
        break;
    }

    if(acerto!=num){
        i--;
        if (i==0){
            
            console.log("Game Over");
            break;
        }  
        console.log("Você errou!");
        console.log(`Você agora tem apenas ${i} chances`);

    }
}