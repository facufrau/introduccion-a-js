//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.
const $botonCalcular = document.querySelector("#calcular-duracion");

function sumarTiemposParciales(listaValores) {
    suma = 0;
    for (let i = 0; i < listaValores.length; i++) {
        suma += Number(listaValores[i].value);
    }
    return suma;
}

$botonCalcular.onclick = function() {
    listaHoras = document.querySelectorAll(".horas");
    listaMinutos = document.querySelectorAll(".minutos");
    listaSegundos = document.querySelectorAll(".segundos");

    totalSumadoHoras = sumarTiemposParciales(listaHoras);
    totalSumadoMinutos = sumarTiemposParciales(listaMinutos);
    totalSumadoSegundos = sumarTiemposParciales(listaSegundos);

    totalSegundos = totalSumadoSegundos % 60;
    minutosASumar = (totalSumadoSegundos - totalSegundos) / 60;
    totalSumadoMinutos += minutosASumar;

    totalMinutos = totalSumadoMinutos % 60;
    horasASumar = (totalSumadoMinutos - totalMinutos) / 60;
    
    totalHoras = totalSumadoHoras + horasASumar;

    textoTiempoTotal = `La duración total de los videos es de: ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`;
    document.querySelector('#duracion-total').innerText = textoTiempoTotal;

    return false;
}
