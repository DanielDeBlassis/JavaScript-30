
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
