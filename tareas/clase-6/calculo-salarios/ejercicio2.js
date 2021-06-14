/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector("#boton-agregar");
const $botonQuitar = document.querySelector("#boton-quitar");
const $botonCalcular = document.querySelector("#boton-calcular");
const elementoResultados = document.querySelector("#resultados");
const elementoErrores = document.querySelector("#errores")
const nodoIntegrantes = document.querySelector("#integrantes");


$botonAgregar.onclick = function () {
    nodoIntegrantes.appendChild(crearIntegrante(document.querySelectorAll('.integrante').length));
    if ($botonQuitar.className === "oculto") {
        mostrarElemento($botonQuitar)
    }
    if ($botonCalcular.className === "oculto") {
        mostrarElemento($botonCalcular)
    }
}

$botonQuitar.onclick = function () {
    let idARemover;
    let nodoARemover;
    if (document.querySelectorAll('.integrante').length === 0) {
        return false;
    }
    else {
        idARemover = "#integrante-" + String(document.querySelectorAll('.integrante').length);
        nodoARemover = document.querySelector(idARemover);
        nodoIntegrantes.removeChild(nodoARemover);
        if (document.querySelectorAll('.integrante').length === 0) {
            ocultarElemento($botonQuitar);
            ocultarElemento($botonCalcular)
            ocultarElemento(elementoResultados);
        }
    }
}


const elementoMayorSalario = document.querySelector("#mayor-salario");
const elementoMenorSalario = document.querySelector("#menor-salario");
const elementoSalarioAnualPromedio = document.querySelector("#salario-anual-promedio");
const elementoSalarioMensualPromedio = document.querySelector("#salario-mensual-promedio");

$botonCalcular.onclick = function () {
    const nodosSalarios = document.querySelectorAll(".salario-input");
    const listaSalarios = [];
    let listaErrores = [];
    let salarioIteracion;
    borrarElementosChild(elementoErrores);

    for (let i = 0; i < nodosSalarios.length; i++) {
        salarioIteracion = nodosSalarios[i].value
        let validacion = validarSalario(salarioIteracion);        
        
        if (validacion === "") {
            listaSalarios.push(Number(salarioIteracion));
            nodosSalarios[i].classList.remove("error");
        }
        else {
            nodosSalarios[i].classList.add("error");
            listaErrores.push(validacion);
        }
    }

    if (listaErrores.length === 0) {
        ocultarElemento(elementoErrores);
        
        elementoMayorSalario.innerText = calcularMayorSalarioAnual(listaSalarios);
        elementoMenorSalario.innerText = calcularMenorSalarioAnual(listaSalarios);
        const salarioAnualPromedio = calcularSalarioAnualPromedio(listaSalarios);
        elementoSalarioAnualPromedio.innerText = salarioAnualPromedio;
        elementoSalarioMensualPromedio.innerText = calcularSalarioMensualPromedio(salarioAnualPromedio);
    
        mostrarElemento(elementoResultados);
        
    }
    else {
        ocultarElemento(elementoResultados);
        
        listaErrores.forEach(function(error) {
            const $error = document.createElement('li');
            $error.innerText = error;
            elementoErrores.appendChild($error);
        })
        mostrarElemento(elementoErrores);
    }
}

const $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.onclick = function () {
    borrarElementosChild(nodoIntegrantes);

    ocultarElemento($botonCalcular);
    ocultarElemento($botonQuitar);
    ocultarElemento(elementoResultados);

    elementoMayorSalario.innerText = "";
    elementoMenorSalario.innerText = "";
    elementoSalarioAnualPromedio.innerText = "";
    elementoSalarioMensualPromedio.innerText = "";

    return false;
}
