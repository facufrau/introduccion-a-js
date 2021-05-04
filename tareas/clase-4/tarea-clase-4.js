// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
console.log('--- Ejercicio 1 ---');
for (let i = 3; i <= 22; i += 3) {
    console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
console.log('--- Ejercicio 2 ---');
let j = 10;
while (j >= 1){
    console.log(j);
    j--;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
console.log('--- Ejercicio 3 ---');
for (let k = 1; k <= 50; k++) {
    if (k % 3 === 0) {
        if (k % 5 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Fizz');
        }
    }
    else if (k % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(k);
    }
}


// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
console.log('--- Ejercicio 4 ---');
let notas = [10,5,4,2,8];
function calcularPromedio(listaDeNotas) {
    let cantidadDeNotas = listaDeNotas.length;
    let sumaDeNotas = 0;
    for (let i = 0; i < cantidadDeNotas; i++){
        sumaDeNotas += listaDeNotas[i];
    }
    return sumaDeNotas / cantidadDeNotas;
}

console.log(`El promedio es: ${calcularPromedio(notas)}`);

// Parametros por defecto en funciones.
function verificarEdad(edad = 18) {
    
    edad >= 18 ? console.log('Podés entrar al bar.') : console.log('No podés entrar al bar.');
    /*
    if (edad >= 18) {
        console.log('Podés entrar al bar.');
    }
    else {
        console.log('No podés entrar al bar.');
    }
    */
}

verificarEdad();
verificarEdad(15);

// Functions expressions.
let z = function(){
    console.log('Esta es mi función z.');
}
z();
