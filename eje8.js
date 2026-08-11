import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el precio unitario del producto: ", function(precio) {
    rl.question("Ingresa la cantidad a comprar: ", function(cantidad) {

        const precioo = parseFloat(precio)
        const cantidadd = parseInt(cantidad)

        const total = precio * cantidad

        console.log(`El total a pagar por la compra es: $${total}`);
        rl.close();
    });
});