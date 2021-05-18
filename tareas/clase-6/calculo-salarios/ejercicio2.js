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
const nodoIntegrantes = document.querySelector("#integrantes");
let contadorIntegrantes = 0;

$botonAgregar.onclick = function () {
    contadorIntegrantes++;
    nodoIntegrantes.appendChild(crearIntegrante(contadorIntegrantes));
    if ($botonQuitar.className === "oculto") {
        mostrarBoton($botonQuitar)
    }
    if ($botonCalcular.className === "oculto") {
        mostrarBoton($botonCalcular)
    }
}

$botonQuitar.onclick = function () {
    let idARemover;
    let nodoARemover;
    if (contadorIntegrantes === 0) {
        return false;
    }
    else {
        idARemover = "#integrante-" + String(contadorIntegrantes);
        nodoARemover = document.querySelector(idARemover);
        nodoIntegrantes.removeChild(nodoARemover);
        contadorIntegrantes--;
        if (contadorIntegrantes === 0) {
            ocultarBoton($botonQuitar);
            ocultarBoton($botonCalcular)
            ocultarResultados(elementoResultados);
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
    let salarioIteracion;
    for (let i = 0; i < nodosSalarios.length; i++) {
        salarioIteracion = Number(nodosSalarios[i].value);
        if (salarioIteracion !== NaN && salarioIteracion !== null && salarioIteracion > 0) {
            listaSalarios.push(salarioIteracion);
        }
    }
    let salarioAnualPromedio = calcularSalarioAnualPromedio(listaSalarios);

    elementoMayorSalario.innerText = calcularMayorSalarioAnual(listaSalarios);
    elementoMenorSalario.innerText = calcularMenorSalarioAnual(listaSalarios);
    elementoSalarioAnualPromedio.innerText = salarioAnualPromedio;
    elementoSalarioMensualPromedio.innerText = calcularSalarioMensualPromedio(salarioAnualPromedio);

    mostrarResultados(elementoResultados);

}

const $botonResetear = document.querySelector("#boton-resetear");
$botonResetear.onclick = function () {
    while (nodoIntegrantes.firstChild) {
        nodoIntegrantes.removeChild(nodoIntegrantes.firstChild);
    }
    contadorIntegrantes = 0;
    ocultarBoton($botonCalcular);
    ocultarBoton($botonQuitar);
    ocultarResultados(elementoResultados);

    elementoMayorSalario.innerText = "";
    elementoMenorSalario.innerText = "";
    elementoSalarioAnualPromedio.innerText = "";
    elementoSalarioMensualPromedio.innerText = "";

    return false;
}
