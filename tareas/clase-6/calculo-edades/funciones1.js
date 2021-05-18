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

function ocultarBotonCalcular(elementoBoton) {
    elementoBoton.className = "oculto";
}

function mostrarBotonCalcular(elementoBoton) {
    elementoBoton.className = "";
}

function ocultarResultados(elementoResultados) {
    elementoResultados.className = "oculto"
}

function mostrarResultados(elementoResultados) {
    elementoResultados.className = ""
}
