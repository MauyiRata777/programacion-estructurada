import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio de su producto:", function(precio){
    rl.question("Ingrese el porcentaje de descuento:", function(descuento){

        precio = parseFloat(precio)
        descuento = parseFloat(descuento)

        let valorDescuento = precio * descuento /100;
        let precioFinal = precio - valorDescuento

        console.log(`El precio original es : $${precio} \n Valor del descuento: $${valorDescuento} \n Precio Final: $${precioFinal}`)
        rl.close();
    })
})