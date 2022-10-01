//Obtenemos todos los inputs de la página
const $inputs = document.querySelectorAll("input");

function actualizarValores(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
