/**
 * Reproduce el sonido al presionar una tecla coincidente
 * @param e evento
 */
function reproducir(e){
    let tecla = e.key;
    let sonido = document.querySelector(`audio[data-key="${tecla}"]`);
    let boton = document.querySelector(`.tecla[data-key="${tecla}"]`);

    if(sonido != null){
        sonido.currentTime = 0;
        sonido.play();
        boton.classList.add("playing");
    }
}

