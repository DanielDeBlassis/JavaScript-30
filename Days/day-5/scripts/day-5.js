const $panels = document.querySelectorAll(".panel");

/**
 * Agrega clase open a un elemento
 */
function toggleOpen() {
    this.classList.toggle("open");
}

/**
 * Agrega clase open-active a un elemento si detecta la transición flex-grow
 * @param e evento de transición
 */
function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

$panels.forEach(panel => panel.addEventListener("click", toggleOpen));
