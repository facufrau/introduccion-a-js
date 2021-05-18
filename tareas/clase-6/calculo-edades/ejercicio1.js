/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonSiguiente = document.querySelector("#siguiente");
const $botonCalcular = document.querySelector("#boton-calcular");
const nodoIntegrantes = document.querySelector("#integrantes");

$botonSiguiente.onclick = function() {
    const numeroIntegrantes = Number(document.querySelector("#numero-integrantes").value);
    $botonSiguiente.setAttribute("disabled", "");
    document.querySelector("#numero-integrantes").setAttribute("disabled", "");

    for (let i = 1; i <= numeroIntegrantes; i++) {
        nodoIntegrantes.appendChild(crearIntegrante(i));
    }

    mostrarBotonCalcular($botonCalcular);    
}


const elementoResultados = document.querySelector("#resultados");
const elementoMayorEdad = document.querySelector("#mayor-edad");
const elementoMenorEdad = document.querySelector("#menor-edad");
const elementoPromedioEdad = document.querySelector("#promedio-edad");

$botonCalcular.onclick = function() {
    const nodosEdades = document.querySelectorAll(".edad-input");
    const listaEdades = [];
    let edadIteracion;
    for (let i = 0; i < nodosEdades.length; i++) {
        edadIteracion = Number(nodosEdades[i].value);
        if (edadIteracion !== NaN && edadIteracion !== null && edadIteracion > 0) {
            listaEdades.push(edadIteracion);
        }
    }

    elementoMayorEdad.innerText = calcularMayorEdad(listaEdades);
    elementoMenorEdad.innerText = calcularMenorEdad(listaEdades);
    elementoPromedioEdad.innerText = calcularPromedioEdades(listaEdades);

    mostrarResultados(elementoResultados);
}


const $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.onclick = function() {
    while (nodoIntegrantes.firstChild) {
        nodoIntegrantes.removeChild(nodoIntegrantes.firstChild);
    }

    $botonSiguiente.removeAttribute("disabled");
    document.querySelector("#numero-integrantes").removeAttribute("disabled");
    document.querySelector("#numero-integrantes").value = "";

    ocultarBotonCalcular($botonCalcular);
    ocultarResultados(elementoResultados);
    return false;
}
