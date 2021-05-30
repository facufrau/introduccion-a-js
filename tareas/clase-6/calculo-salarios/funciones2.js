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

function ocultarElemento(elemento) {
    elemento.className = "oculto";
}

function mostrarElemento(elemento) {
    elemento.className = ""
}

function borrarElementosChild(elementoPadre) {
    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.firstChild);
    }
}

function validarSalario(salario) {
    if(!/^[0-9\.\-]+$/i.test(salario)) {
        return "El salario solo puede contener números";
    }
    else if (Number(salario) < 1) {
        return "El salario debe ser mayor a 0";
    }
    else {
        return "";
    }
}