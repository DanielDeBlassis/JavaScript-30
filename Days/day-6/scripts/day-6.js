
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

let cities = [];

const $searchInput = document.querySelector(".busqueda");
const $sugerencias = document.querySelector(".sugerencias");


fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));


/**
 * Encuentra coincidencias de una palabra
 * @param {string} wordToMatch 
 * @param {string} cities 
 * @returns coincidencias encontradas
 */
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}

/**
 * Formatea un número colocándole comas
 * @param {number} x 
 * @returns número formateado
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Muestra las coincidencias encontradas por pantalla
 */
function displayMatches() {
    if (this.value) {
        const matchArray = findMatches(this.value, cities);

        const listMatch = matchArray.map(place => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `<li class="coincidencia">
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population"><i class="fas fa-users">&nbsp ${numberWithCommas(place.population)}</i></span>
                </li>`;
        }).join("");

        $sugerencias.innerHTML = listMatch;
    } else {
        $sugerencias.innerHTML = "";
    }

}



$searchInput.addEventListener("change", displayMatches);
$searchInput.addEventListener("keyup", displayMatches);
