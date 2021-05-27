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

    mostrarElemento($botonCalcular);    
}


const elementoResultados = document.querySelector("#resultados");
const elementoErrores = document.querySelector("#errores");
const elementoMayorEdad = document.querySelector("#mayor-edad");
const elementoMenorEdad = document.querySelector("#menor-edad");
const elementoPromedioEdad = document.querySelector("#promedio-edad");

$botonCalcular.onclick = function(event) {
    const nodosEdades = document.querySelectorAll(".edad-input");
    const listaEdades = [];
    let errores = [];
    let edadIteracion;
    borrarElementosChild(elementoErrores);
    
    for (let i = 0; i < nodosEdades.length; i++) {
        edadIteracion = Number(nodosEdades[i].value);
        let validacion = validarEdad(edadIteracion);
        if (validacion === "") {
            listaEdades.push(edadIteracion);
            nodosEdades[i].classList.remove("error");
        }
        else {
            nodosEdades[i].classList.add("error");
            errores.push(validacion);
            }
    }

    if (errores.length === 0) {
        ocultarElemento(elementoErrores);
        
        elementoMayorEdad.innerText = calcularMayorEdad(listaEdades);
        elementoMenorEdad.innerText = calcularMenorEdad(listaEdades);
        elementoPromedioEdad.innerText = calcularPromedioEdades(listaEdades);
    
        mostrarElemento(elementoResultados);
        
    }
    else {
        ocultarElemento(elementoResultados);
        errores.forEach(function(error) {
            const $error = document.createElement('li');
            $error.innerText = error;
            elementoErrores.appendChild($error);
        })
        mostrarElemento(elementoErrores);
    }
}


const $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.onclick = function() {
    borrarElementosChild(nodoIntegrantes);
    borrarElementosChild(elementoErrores);
    ocultarElemento(elementoErrores);

    $botonSiguiente.removeAttribute("disabled");
    document.querySelector("#numero-integrantes").removeAttribute("disabled");
    document.querySelector("#numero-integrantes").value = "";

    ocultarElemento($botonCalcular);
    ocultarElemento(elementoResultados);
    return false;
}
