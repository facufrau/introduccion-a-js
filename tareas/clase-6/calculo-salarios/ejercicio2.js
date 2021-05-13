/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
function calcularMayorSalarioAnual(salarios) {
    let mayorSalarioAnual = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] > mayorSalarioAnual) {
            mayorSalarioAnual = salarios[i];
        }
    }
    return mayorSalarioAnual;
}

function calcularMenorSalarioAnual(salarios) {
    let menorSalarioAnual = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i] < menorSalarioAnual) {
            menorSalarioAnual = salarios[i];
        }
    }
    return menorSalarioAnual;
}

function calcularSalarioAnualPromedio(salarios) {
    let sumaSalarios = 0;
    for (let i = 0; i < salarios.length; i++) {
        sumaSalarios += salarios[i];
    }
    return sumaSalarios / salarios.length;
}

function calcularSalarioMensualPromedio(salarioAnualPromedio) {
    const mesesEnUnAnio = 12;
    return salarioAnualPromedio / mesesEnUnAnio;
}

function crearElementoInput() {
    let elementoInput = document.createElement("input");
    elementoInput.className = "salario-input";
    elementoInput.type = "number";
    return elementoInput;
}

function crearElementoLabel() {
    let elementoLabel = document.createElement("label");
    elementoLabel.className = "salario-label";

    return elementoLabel;
}

function crearIntegrante(numeroIntegrante) {
    elementoInput = crearElementoInput();
    elementoLabel = crearElementoLabel();
    elementoDiv = document.createElement("div");
    elementoDiv.id = "integrante-" + numeroIntegrante;

    textoLabel = document.createTextNode(`Integrante n°${numeroIntegrante} - Salario anual ($ / año): `);
    elementoLabel.appendChild(textoLabel);

    elementoDiv.appendChild(elementoLabel);
    elementoDiv.appendChild(elementoInput);
    elementoDiv.appendChild(document.createElement("br"));

    return elementoDiv;
}


const $botonAgregar = document.querySelector("#boton-agregar");
const $botonQuitar = document.querySelector("#boton-quitar");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonResetear = document.querySelector("#boton-resetear");

const nodoIntegrantes = document.querySelector("#integrantes");
let contadorIntegrantes = 0;

$botonAgregar.onclick = function () {
    contadorIntegrantes++;
    nodoIntegrantes.appendChild(crearIntegrante(contadorIntegrantes));
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

    const mayorSalarioAnual = calcularMayorSalarioAnual(listaSalarios);
    const menorSalarioAnual = calcularMenorSalarioAnual(listaSalarios);
    const salarioAnualPromedio = calcularSalarioAnualPromedio(listaSalarios);
    const salarioMensualPromedio = calcularSalarioMensualPromedio(salarioAnualPromedio);

    if (mayorSalarioAnual && menorSalarioAnual && salarioAnualPromedio && salarioMensualPromedio) {
        elementoMayorSalario.innerText = `El mayor salario anual es: ${mayorSalarioAnual}`;
        elementoMenorSalario.innerText = `El menor salario anual es: ${menorSalarioAnual}`;
        elementoSalarioAnualPromedio.innerText = `El salario anual promedio es: ${salarioAnualPromedio}`;
        elementoSalarioMensualPromedio.innerText = `El salario mensual promedio es: ${salarioMensualPromedio}`;  
    }

}

$botonResetear.onclick = function () {
    while (nodoIntegrantes.firstChild) {
        nodoIntegrantes.removeChild(nodoIntegrantes.firstChild);
    }
    contadorIntegrantes = 0;
    elementoMayorSalario.innerText = "";
    elementoMenorSalario.innerText = "";
    elementoSalarioAnualPromedio.innerText = "";
    elementoSalarioMensualPromedio.innerText = "";

    return false;
}
