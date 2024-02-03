let numeroSecreto = 0;
let numerosIntentos = 0;
let numeroGenerado = [];
function asignarTextoElemento(elemtento, texto) {
    let elentoHtml = document.querySelector(elemtento);
    elentoHtml.innerHTML = texto;
}
function verificarintento() {
    console.log(numeroSecreto);
    let numerousuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numerousuario) {
        asignarTextoElemento("p", `acertaste el número en ${numerosIntentos} ${(numerosIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } else {
        numerosIntentos++;
        if (numeroSecreto < numerousuario) {
            asignarTextoElemento("p", "El número es menor");
        } else {
            asignarTextoElemento("p", "El número es mayor");
        }
    }
    limpiarCaja();
    return;
}
function generarNumeroSecreto() {
    if (numeroGenerado.length === 10) {
        asignarTextoElemento('h1', 'Fin del juego');
        document.getElementById('intentar').setAttribute('disabled', true);
        document.getElementById('reiniciar').setAttribute('disabled', true);
        return;
    }
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    if (numeroGenerado.includes(numeroSecreto)) {
        console.log('entro al if');
        return generarNumeroSecreto();
    }
    numeroGenerado.push(numeroSecreto);
    return numeroSecreto;
}

function condicionesIniciales() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", "Elige un numer entre el 1 al 10");
    numerosIntentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}
function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    numerosIntentos = 1;
}

condicionesIniciales();