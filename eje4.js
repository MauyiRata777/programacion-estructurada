import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el nombre del producto:", function (producto) {
    rl.question("Ingrese el precio del producto:", function (precio) {
        rl.question("Ingrese la cantidad de productos:", function (cantidad) {
            cantidad = Number(cantidad);
            precio = Number(precio);

            const total = precio * cantidad;

            console.log(`Resumen de su compra`);
            console.log(`Producto :${producto}`);
            console.log(`Precio unitario:${precio}`);
            console.log(`cantidad: ${cantidad}`);
            console.log(`total a pagar: $${total}`)
            rl.close();
        })
    })
});