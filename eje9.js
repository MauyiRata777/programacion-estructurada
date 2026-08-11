import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un dato: ", function(dato){
    let dato1 = parseFloat(dato);

    console.log(`Dato ingresado : ${dato} \n Resultado de parseFloat ${dato1} \n Resultado de inNan: ${isNaN(dato1)}`)
    rl.close();
});