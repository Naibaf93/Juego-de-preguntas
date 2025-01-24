/* Variables */
let tiempoTerminado;
let intervaloTiempo;

/* Funciones */
function comenzarCuentaRegresiva(){
    tiempoTerminado = setTimeout(tiempoCumplido, 3000);
    intervaloTiempo = setInterval(ticTac, 1000);

    document.getElementById("cuentaRegrevisa").textContent = 30;
}

function ticTac() {
    let tiempo =     document.getElementById("cuentaRegrevisa").textContent;

    document.getElementById("cuentaRegrevisa").textContent = tiempo - 1;
}

function tiempoCumplido() {
    clearInterval(intervaloTiempo);

    document.getElementById("cuentaRegrevisa").textContent = 0;
    document.getElementById("audioFinal").play();

    alert("Game Over: se acabo el tiempo... intenta nuevamente");
}

function finalizado() {
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloTiempo);

    let fecha = new Date();
    let respuesta1 = document.getElementById("respuesta1").value;
    let respuesta2 = document.getElementById("respuesta2").value;
    let respuesta3 = document.getElementById("respuesta3").value;
    let respuesta4 = document.getElementById("respuesta4").value;
    let respuesta5 = document.getElementById("respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-ES") + "\n" + "1. " + respuesta1 + "\n" +        
                                                                   + respuesta2 + "\n" +      
                                                                   + respuesta3 + "\n" +
                                                                   + respuesta4 + "\n" +
                                                                   + respuesta5 + "\n" ;
}