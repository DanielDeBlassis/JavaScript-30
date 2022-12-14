const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955, img: "http://drive.google.com/uc?export=view&id=1CAkx9phvc5MP4D7QmysZt606pmFA_w7Z" },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727, img: "http://drive.google.com/uc?export=view&id=1k1c3QbZPYlp7aqdw0gWewQC1Snn2GHGx" },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642, img: "http://drive.google.com/uc?export=view&id=16GmHXIP5szQzLCE0V9AeHl8EoB9wYEn2" },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934, img: "http://drive.google.com/uc?export=view&id=1lyHJFITNYV3zEUyVSt_vjVnVBconJxHp" },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630, img: "http://drive.google.com/uc?export=view&id=1DyNvKFn_YfXR9wCQ1SbXy_WXC3L-EJM7" },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543, img: "http://drive.google.com/uc?export=view&id=1NseTZciL-D2WHYQwetR4hABwQA2N3imS" },
    { first: "Max", last: "Planck", year: 1858, passed: 1947, img: "http://drive.google.com/uc?export=view&id=18K15olPNo9KlHkpJYwoD5WuE3PzqPGhV" },
    { first: "Nikola", last: "Tesla", year: 1856, passed: 1943, img: "http://drive.google.com/uc?export=view&id=1lSQEDkl48vu6gqyvSw1Bh7pyoeeX2b0X" },
    { first: "Thomas", last: "Edison", year: 1847, passed: 1931, img: "http://drive.google.com/uc?export=view&id=1qq6nWqfSyDlFTho0IOEbvCKiEENdYY_E" },
    { first: "Benjamin", last: "Franklin", year: 1706, passed: 1790, img: "http://drive.google.com/uc?export=view&id=1DJl5y4D6bIyi9Od9BNR4NJKpjj3r2DbO" },
    { first: "Leonardo", last: "Da Vinci", year: 1452, passed: 1519, img: "http://drive.google.com/uc?export=view&id=17w2VcDGfh4PaO12t8GWYxrtwEeyq41zg" },
    { first: "Alexander", last: "Graham Bell", year: 1847, passed: 1922, img: "http://drive.google.com/uc?export=view&id=185xEfEBK5HUlNOC0RA_GZLwSQoPoQjJu" }
];


const personas = ['Chung, Michael', 'Chen, Christopher', 'Melton, Jessica', 'Hill, Matthew', 'Puckett, Ashley', 'Song, Jennifer', 'Hamilton, Joshua', 'Bender, Amanda', 'Wagner, Daniel', 'McLaughlin, David', 'McNamara, James', 'Raynor, Robert', 'Moon, John', 'Woodard, Joseph', 'Desai, Andrew', 'Wallace, Ryan', 'Lawrence, Brandon', 'Griffin, Jason', 'Dougherty, Justin', 'Powers, Sarah', 'May, William', 'Steele, Jonathan', 'Teague, Stephanie', 'Vick, Brian', 'Gallagher, Nicole', 'Solomon, Nicholas', 'Walsh, Anthony', 'Monroe, Heather', 'Connolly, Eric', 'Hawkins, Elizabeth', 'Middleton, Adam', 'Goldstein, Megan', 'Watts, Melissa', 'Johnston, Kevin', 'Weeks, Steven', 'Wilkerson, Thomas', 'Barton, Timothy', 'Walton, Christina', 'Hall, Kyle', 'Ross, Rachel', 'Woods, Laura', 'Mangum, Lauren', 'Joseph, Amber'];


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////EXERCISES////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's
//1. Filtra la lista de inventores que nacieron en los 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

//Array.prototype.map()
//2. Give us an array of the inventory first and las names
//2. Obt??n un array con el primer y segundo nombre de los inventores
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

//Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest
//3. Ordena a los inventores por fecha de nacimiento, del m??s viejo al m??s joven
const desc = inventors.slice(0);
const ordered = desc.sort((a, b) => a.year > b.year ? 1 : -1);

//Array.prototype.reduce()
//4. How many years did all the inventors live?
//4. Cu??ntos a??os vivieron todos los inventores?
const totalAnios = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

//5. Sort the inventors by years lived
//5. Ordena los inventores por a??os vividos
const copia = inventors.slice(0);
const mayores = copia.sort(function (a, b) {
    const actual = a.passed - a.year;
    const siguiente = b.passed - b.year;
    return actual > siguiente ? -1 : 1;
});

//6. Create a list of boulevards in Paris that contain "de" anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const categoria = document.querySelector(".mw-category");
// const links = Array.from(categoria.querySelectorAll("a"));
// const de = links
//     .map(link => link.textContent)
//     .filter(nombreCalle => nombreCalle.includes("de"));


//7. Sort Exercise
//Sort the people alphabetically by last name
const ordenAlfabetico = personas.sort((anterior, siguiente) => {
    const [aAnterior, aSiguiente] = anterior.split(", ");
    const [bAnterior, bSiguiente] = siguiente.split(", ");
    return aAnterior > bAnterior ? 1 : -1;
})

//8. Reduce Exercise
//Sum up the instances of each of these
//Suma las instancias de cada objeto
const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike",
"walk", "car", "van", "car", "truck"];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const $tabla = document.querySelector("#tabla");

/**
 * Muestra lista de inventores
 */
function cargarInventores() {

    let contenido = ``;

    contenido += `<thead><tr><th>Name</th><th>Lastname</th><th>Year</th><th>Passed</th><th>Image</th></tr></thead>`;

    inventors.forEach(inventor => {
        contenido += `<tbody><tr><td>${inventor.first}</td><td>${inventor.last}</td><td>${inventor.year}</td><td>${inventor.passed}</td><td><img class="img-inventors" src="${inventor.img}" alt="${inventor.first + " " + inventor.last}"/></td><tr></tbody>`;
    });
    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;

}

/**
 * Muestra lista solo con los nombres de los inventores
 */
function cargarNombres() {
    let contenido = ``;

    contenido += `<thead><tr><th>Name and Lastname</th></tr></thead>`;

    fullNames.forEach(name => {
        contenido += `<tbody><tr><td>${name}</td><tr></tbody>`;
    });

    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;
}

/**
 * Muestra los inventores ordenados por fecha de nacimiento
 */
function ordenarInventores() {
    let contenido = ``;

    contenido += `<thead><tr><th>Name</th><th>Lastname</th><th>Year</th><th>Passed</th><th>Image</th></tr></thead>`;

    ordered.forEach(order => {
        contenido += `<tbody><tr><td>${order.first}</td><td>${order.last}</td><td>${order.year}</td><td>${order.passed}</td><td><img class="img-inventors" src="${order.img}" alt="${order.first + " " + order.last}"/></td><tr></tbody>`;
    });

    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;
}

/**
 * Muestra los inventores nacidos en 1500
 */
function cargarNacidosEn1500() {
    let contenido = ``;

    contenido += `<thead><tr><th>Name</th><th>Lastname</th><th>Year</th><th>Passed</th><th>Image</th></tr></thead>`;

    fifteen.forEach(element => {
        contenido += `<tbody><tr><td>${element.first}</td><td>${element.last}</td><td>${element.year}</td><td>${element.passed}</td><td><img class="img-inventors" src="${element.img}" alt="${element.first + " " + element.last}"/></td><tr></tbody>`;
    });

    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;
}

/**
 * Muestra suma total de a??os vividos
 */
function mostrarTotalAnios() {
    let contenido = ``;

    contenido += `<thead><tr><th>Total</th></tr></thead>
        <tbody><tr><td>${totalAnios} a??os</td><tr></tbody>`;

    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;
}

/**
 * Muestra lista de inventores ordenada por a??os vividos
 */
function ordenarPorAniosVividos() {
    let contenido = ``;

    contenido += `<thead><tr><th>Name</th><th>Lastname</th><th>Year</th><th>Passed</th><th>Image</th></tr></thead>`;

    mayores.forEach(mayor => {
        contenido += `<tbody><tr><td>${mayor.first}</td><td>${mayor.last}</td><td>${mayor.year}</td><td>${mayor.passed}</td><td><img class="img-inventors" src="${mayor.img}" alt="${mayor.first + " " + mayor.last}"/></td><tr></tbody>`;
    });

    $tabla.innerHTML = ``;
    $tabla.innerHTML = contenido;
}

