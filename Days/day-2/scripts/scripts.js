const $hora = document.querySelector(".aguja.horas");
const $minutos = document.querySelector(".aguja.minutos");
const $segundos = document.querySelector(".aguja.segundos");

function establecerHora() {
    const tiempo = new Date();

    const hora = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();

    const anguloHoras = (((hora / 12) * 360) + 90 + (minutos / 2));//30° son una hora, por lo que se le suma la cantidad de minutos dividido por 2
    $hora.style.transform = `rotate(${anguloHoras}deg)`;
    
    const anguloMinutos = (((minutos / 60) * 360) + 90);//Se le suma 90 para corregir el ángulo inicial
    $minutos.style.transform = `rotate(${anguloMinutos}deg)`;
    
    const anguloSegundos = (((segundos / 60) * 360) + 90);//Se le suma 90 para corregir el ángulo inicial
    $segundos.style.transform = `rotate(${anguloSegundos}deg)`;
}

setInterval(establecerHora, 1000);

