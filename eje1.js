//PASO 1 - IMPORTAR EL MODULO
import readline from "node:readline"

// PASO 2 CREAR LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//PASO 3 HACER CONSULTA AL USUARIO
rl.question("Ingrese una primera nota:", function(nota1){
    rl.question("Ingrese una segunda nota:", function(nota2){
        rl.question("Ingrese una tercera nota:", function(nota3){

          const n1 = Number(nota1)
          const n2 = Number(nota2)
          const n3 = Number(nota3)

          const promedio = (n1 + n2 + n3)/3

          //SALIDA DE LA INFORMACION
          console.log(`El promedio del estudiante es ${promedio}`);

          //CERRAR LA CONSOLA
          rl.close();
        })
    })
})