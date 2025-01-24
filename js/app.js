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