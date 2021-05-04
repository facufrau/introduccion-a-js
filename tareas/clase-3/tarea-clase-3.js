// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// Tarea 1
let nombreUsuario = (prompt('Cuál es tu nombre?') || '').toLowerCase();
const miNombre = 'facundo';
const nombreDeMiPerro = 'freja';

if (nombreUsuario === miNombre) {
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}`);
}
else if (nombreUsuario === nombreDeMiPerro) {
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi perro!`);
}
else if (nombreUsuario.trim().length === 0) {
    console.log('No ingresaste ningún nombre.')
}
else {
    console.log(`Hola ${nombreUsuario}!`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// Tarea 2
const miEdad = 29;
let edadUsuario = Number(prompt('Cuál es tu edad?'));
if (edadUsuario > miEdad) {
    console.log(`Tenés más años que yo, mi edad es de ${miEdad} años.`);
}
else if (edadUsuario === miEdad) {
    console.log(`Tenés la misma edad que yo ${miEdad} años.`);
}
else if (edadUsuario < miEdad) {
    console.log(`Tenés menos años que yo, mi edad es de ${miEdad} años.`);
}
else {
    console.log('No entendí tu respuesta.')
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

// Tarea 3
const EDAD_DE_INGRESO_AL_BAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

let tieneDocumento = (prompt('Hola, tenés documento? (si o no)') || '').toLowerCase();
if (tieneDocumento === RESPUESTA_SI) {
    let edadUsuario = Number(prompt('Cuál es tu edad?'));

    if (edadUsuario >= EDAD_DE_INGRESO_AL_BAR) {
        console.log('Bienvenido, podés entrar al bar.');
    }
    else if (edadUsuario < EDAD_DE_INGRESO_AL_BAR) {
        console.log(`No podés entrar al bar, tenés menos de ${EDAD_DE_INGRESO_AL_BAR} años.`);
    }
    else {
        console.log('No entendí tu respuesta.');
    }
}
else if (tieneDocumento === RESPUESTA_NO) {
    console.log('No podés entrar al bar si no tenés documento.');
}
else {
    console.log(`No entendí tu respuesta. Respuesta: ${tieneDocumento}`);
}

