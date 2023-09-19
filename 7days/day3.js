
const prompt = require('prompt-sync')();

let area = prompt("Front-End ou Back-End: ");
let area2;
if(area === "Front-End"){

    area2 = prompt("React ou Vue: ");
}

if(area === "Back-End"){

    area2 = prompt("Java ou C#: ");
}

prompt(`Seguir no ${area} ou FullStack: `);

let tec = prompt("Quantas tecnologias quer aprender: ");
let tec2 = [];
for(let i = 0;i<tec;i++){

    let tec3 = prompt(`Entre com a ${i+1}º Tecnologia: `);
    tec2[i] = tec3;
}

for(let i = 0;i<tec;i++){

    console.log(tec2[i]);
    
}


    
