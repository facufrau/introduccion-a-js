//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonMostrar = document.querySelector("#boton-mostrar");
$botonMostrar.onclick = function() {
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edad = Number(document.querySelector("#edad").value);

    const nombreDeUsuario = primerNombre + ' ' + segundoNombre + ' ' + apellido;
    document.querySelector("h1").innerText = `Bienvenido, ${nombreDeUsuario}`;

    const informacionUsuario = `Tu nombre es: ${nombreDeUsuario} y tenés ${edad} años.`;
    document.querySelector("#informacion-usuario").value = informacionUsuario;

    return false;
}
