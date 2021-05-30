function probarValidarEdad() {
    console.assert(
        validarEdad('asd123#$') === "La edad solo puede contener números",
        "Validar edad no validó que contenga solo numeros"
    )

    console.assert(
        validarEdad('121') === "La edad no puede ser mayor a 120",
        "Validar edad no validó que sea menor a 120",
    );

    console.assert(
        validarEdad('-1') === "La edad no puede ser menor a 1",
        "Validar edad no validó que la edad sea mayor que 0",
    );

    console.assert(
        validarEdad('24.31') === "La edad debe ser un número entero",
        "Validar edad no validó que la edad sea un número entero",
    );

    console.assert(
        validarEdad('55') === "",
        "Validar edad falló con una edad válida",
    );

}

probarValidarEdad();
