// Script de pruebas para calculo de salarios.
function probarValidarSalario(salario) {
    console.assert(
        validarSalario('a#!%k922') === "El salario solo puede contener números",
        "Validar salario no validó que solo contenga numeros",
    );
    
    console.assert(
        validarSalario('-2222') === "El salario debe ser mayor a 0",
        "Validar salario no validó que el valor sea mayor a 0",
    );

    console.assert(
        validarSalario('12357.44') === "",
        "Validar salario falló con un salario válido"
    );
}

probarValidarSalario();