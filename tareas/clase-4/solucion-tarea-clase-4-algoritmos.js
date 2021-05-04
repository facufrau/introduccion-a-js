// #1: Imprimí los números del 1 al 10
function contarHastaNumero(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
contarHastaNumero(10);

// #2: Imprimí los números impares del 1 al 100
function contarNumerosImpares(numero) {
    for (let i = 1; i <= numero; i += 2) {
        console.log(i);
    }
}
contarNumerosImpares(100);

// #3: Imprimí la tabla de multiplicación del 7
function tablaDeMultiplicar(numero) {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i; 
        console.log(`${numero}x${i} = ${resultado}`);
    }
}
tablaDeMultiplicar(7);

// #4: Imprimí todas las tablas de multiplicación del 1 al 9
for (let i = 1; i < 10; i++) {
    console.log('Tabla de multiplicar del número: ' + i);
    tablaDeMultiplicar(i);
}

// #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.

// Con array.
function sumaDeNumerosEnArray(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return total
}
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log('La suma de los números del 1 al 10 es: ' + sumaDeNumerosEnArray(numeros)); 

// Con bucle for.
let suma1Al10 = 0;
for (let i = 1; i <= 10; i++) {
    suma1Al10 += i;
}
console.log('La suma de los números del 1 al 10 es: ' + suma1Al10);

// #6: Calcula 10! (10 factorial)
function factorial(numero) {
    if (numero === 1) {
        return 1;
    }
    else{
        return numero * factorial(numero - 1);
    }
}
console.log('El factorial de 10 es: ' + factorial(10));

// #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
function sumaDeNumerosImpares(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i < fin; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }
    return suma;
}
console.log('Suma de impares > 10 y < 30 es: ' + sumaDeNumerosImpares(10,30));

// #8: Crea una función que convierta de Celsius a Fahrenheit
function celsiusAFahrenheit(gradosCelsius) {
    return (gradosCelsius * 1.8) + 32;
}
console.log(`37.5 °C equivalen a ${celsiusAFahrenheit(37.5)} °F`);

// #9: Crea una función que convierta de Fahrenheit a Celsius
function fahrenheitACelsius(gradosFahreneheit) {
    return (gradosFahreneheit - 32) / 1.8;
}
console.log(`100 °F equivalen a ${fahrenheitACelsius(100)} °C`);

// #10: Calcula la suma de todos los números en un array de números
// Ya resuelto a través de función en desafío #5.
let sumaArray = sumaDeNumerosEnArray([3,85,-236,999]);
console.log(`La suma de los números en array es ${sumaArray}`);

// #11: Calcula el promedio de todos los números en un array de números. (en una función)
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}
let promedio = calcularPromedio([10, 9, 8, 4, 5, 6]);
console.log(`El promedio de [10, 9, 8, 4, 5, 6] es ${promedio}.`);

// #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos.
function encontrarPositivos(numeros) {
    let positivos = [];
    let numeroActual = 0;
    for (let i = 0; i < numeros.length; i++){
        numeroActual = numeros[i];
        if (numeroActual > 0) {
            positivos.push(numeroActual);
        }
    }
    return positivos;
}
let numerosConNegativos = [1,2,3,0,-1,-2,-3,8,-55,6312,-7894];
console.log(`Numeros positivos del array ${encontrarPositivos(numerosConNegativos)}`);

// #13: Find the maximum number in an array of numbers.
function encontrarMaximoNumero(numeros) {
    let maximo;
    
    if (numeros.length > 0){
        maximo = numeros[0];
    }
    else if (numeros.length === 0) {
        return 0;
    }

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}
console.log(encontrarMaximoNumero(numerosConNegativos));