/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function crearElementoInput() {
    let elementoInput = document.createElement("input");
    elementoInput.className = "edad-input";
    elementoInput.type = "number";
    return elementoInput
}

function crearElementoLabel() {
    let elementoLabel = document.createElement("label");
    elementoLabel.className = "edad-label";
    
    return elementoLabel
}

function calcularMayorEdad(edades) {
    let mayorEdad = edades[0];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > mayorEdad) {
            mayorEdad = edades[i];
        }
    }
    return mayorEdad;
}

function calcularMenorEdad(edades) {
    let menorEdad = edades[0];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < menorEdad) {
            menorEdad = edades[i];
        }
    }
    return menorEdad;
}

function calcularPromedioEdades(edades) {
    let sumaEdades = 0;
    for (let i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
    }
    return sumaEdades / edades.length;
}

function crearIntegrante(nodoPadre, numeroDeIntegrante) {
	elementoInput = crearElementoInput();
        elementoLabel = crearElementoLabel();
    
        textoLabel = document.createTextNode(`Integrante n°${numeroDeIntegrante} - Edad: `);
        elementoLabel.appendChild(textoLabel);

        nodoPadre.appendChild(elementoLabel);
        nodoPadre.appendChild(elementoInput);
        nodoPadre.appendChild(document.createElement("br"));
}


const $botonSiguiente = document.querySelector("#siguiente");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonResetear = document.querySelector("#boton-resetear")
const nodoIntegrantes = document.querySelector("#integrantes");

const elementoMayorEdad = document.querySelector("#mayor-edad");
const elementoMenorEdad = document.querySelector("#menor-edad");
const elementoPromedioEdad = document.querySelector("#promedio-edad");

$botonSiguiente.onclick = function() {
    const numeroIntegrantes = Number(document.querySelector("#numero-integrantes").value);
    $botonSiguiente.setAttribute("disabled", "");
    document.querySelector("#numero-integrantes").setAttribute("disabled", "");

    for (let i = 1; i <= numeroIntegrantes; i++) {
        crearIntegrante(nodoIntegrantes, i);
    }
}

$botonCalcular.onclick = function() {
    const nodosEdades = document.querySelectorAll(".edad-input");
    const listaEdades = [];

    for (let i = 0; i < nodosEdades.length; i++) {
        listaEdades.push(Number(nodosEdades[i].value));
    }

    const mayorEdad = calcularMayorEdad(listaEdades);
    const menorEdad = calcularMenorEdad(listaEdades);
    const promedioEdad = calcularPromedioEdades(listaEdades);

    elementoMayorEdad.innerText = `La mayor edad es: ${mayorEdad}`;
    elementoMenorEdad.innerText = `La menor edad es: ${menorEdad}`;
    elementoPromedioEdad.innerText = `El promedio de las edades es: ${promedioEdad}`;
}

$botonResetear.onclick = function() {
    while (nodoIntegrantes.firstChild) {
        nodoIntegrantes.removeChild(nodoIntegrantes.firstChild);
    }
    elementoMayorEdad.innerText = "";
    elementoMenorEdad.innerText = "";
    elementoPromedioEdad.innerText = "";

    $botonSiguiente.removeAttribute("disabled");
    document.querySelector("#numero-integrantes").removeAttribute("disabled");
    document.querySelector("#numero-integrantes").value = "";

    return false;
}
