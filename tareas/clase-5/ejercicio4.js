//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

$botonCalcular = document.querySelector("#boton-calcular");

function calcularPromedio(numeros) {
    let suma = 0; 
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

function calcularMaximo(numeros) {
    let maximo = -9999999;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

function calcularMinimo(numeros) {
    let minimo = 9999999;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    return minimo;
}

function contarRepeticiones(numero, lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (numero === lista[i]) {
            contador++;
        }
    }
    return contador;
}

function calcularMasFrecuente(numeros) {
    let numeroActual;
    let repeticionesMax = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeroActual !== numeros[i]){
            numeroActual = numeros[i];
            repeticiones = contarRepeticiones(numeroActual, numeros);
        }
        if (repeticiones > repeticionesMax) {
            repeticionesMax = repeticiones;
        }
    }
    return numeroActual;
}

$botonCalcular.onclick = function() {
    const valoresDeLi = document.querySelectorAll('li');
    const listaValores = [];
    
    for (let i = 0; i < valoresDeLi.length; i++) {
        listaValores.push(Number(valoresDeLi[i].innerText));
    }

    const promedio = calcularPromedio(listaValores);
    const maximo = calcularMaximo(listaValores);
    const minimo = calcularMinimo(listaValores);
    const masFrecuente = calcularMasFrecuente(listaValores)

    document.querySelector('#em-promedio').innerText = promedio;
    document.querySelector('#em-pequenio').innerText = minimo;
    document.querySelector('#em-grande').innerText = maximo;
    document.querySelector('#em-frecuente').innerText = masFrecuente;

    return false;
}
