/* Variables */
let tiempoTerminado;
let intervaloTiempo;

/* Funciones */
function comenzarCuentaRegresiva(){
    tiempoTerminado = setTimeout(tiempoCumplido, 3000);
    intervaloTiempo = setInterval(ticTac, 1000);

    document.getElementById("cuentaRegrevisa").textContent = 30;
}