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
    return (sumaEdades / edades.length).toFixed(2);
}

function crearElementoInput() {
    let elementoInput = document.createElement("input");
    elementoInput.className = "edad-input";
    elementoInput.type = "number";
    return elementoInput;
}

function crearElementoLabel() {
    let elementoLabel = document.createElement("label");
    elementoLabel.className = "edad-label";
    
    return elementoLabel;
}

function crearIntegrante(numeroDeIntegrante) {
	elementoInput = crearElementoInput();
    elementoLabel = crearElementoLabel();
    elementoDiv = document.createElement("div");
    
    textoLabel = document.createTextNode(`Integrante n°${numeroDeIntegrante} - Edad: `);
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
    elemento.className = "";
}

function validarEdad(edad) {
    if(!/^[0-9\.\-]+$/i.test(edad)) {
        return "La edad solo puede contener números";
    }
    else if (Number(edad) > 120) {
        return "La edad no puede ser mayor a 120";
    }
    else if (Number(edad) < 1) {
        return "La edad no puede ser menor a 1";
    }
    else if (!Number.isInteger(Number(edad))) {
        return "La edad debe ser un número entero";
    }
    else {
        return "";
    }
}

function borrarElementosChild(elementoPadre) {
    while (elementoPadre.firstChild) {
        elementoPadre.removeChild(elementoPadre.firstChild);
    }
}
