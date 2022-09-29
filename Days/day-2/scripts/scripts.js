const $hora = document.querySelector(".aguja.horas");
const $minutos = document.querySelector(".aguja.minutos");
const $segundos = document.querySelector(".aguja.segundos");

function establecerHora() {
    const tiempo = new Date();

    const hora = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();

}
