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

/**
 * Remueve la transición al finalizar la reproducción del sonido
 * @param e evento
 * @return undefined si el nombre de la propiedad no es transform
 */
function removerTransicion(e){
    if(e.propertyName !== "transform"){
        return;
    }
    this.classList.remove("playing");
}

const teclas = document.querySelectorAll(".tecla");
teclas.forEach(tecla => tecla.addEventListener("transitionend", removerTransicion));

window.addEventListener("keydown", reproducir);