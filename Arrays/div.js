
const num = [];
    
    for( let i = 0; i<31;i++){

        let muda = Math.floor(Math.random()*(501));
        num[i] = muda;
    }
    
 const num1 = num.slice(0,num.length/2);
 const num2 = num.slice(num.length/2);

 console.log(num1);
 console.log(num2);
