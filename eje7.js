import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa su longitud en metros: ", function(metross) {

    const metros = parseFloat(metross)
    const centimetros = metros * 100

    console.log(`\n${metros} metros equivalen a ${centimetros} centímetros.`);
    rl.close();
});