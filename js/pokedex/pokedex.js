const apiUrl = "https://pokeapi.co/api/v2/";

/* ------------------------------------------
ELEMENTOS DO HTML
------------------------------------------ */

const pokemonsContainer =
document.getElementById("pokemonsContainer");

const searchInput =
document.getElementById("searchInput");

const regionTitle =
document.getElementById("regionTitle");

const regionGeneration =
document.getElementById("regionGeneration");

const backButton =
document.getElementById("backButton");

const previousButton =
document.getElementById("previousButton");

const nextButton =
document.getElementById("nextButton");

const pageNumber =
document.getElementById("pageNumber");

const regions = {

kanto: {
    name: "Kanto",
    generation: "Geração I",
    start: 1,
    end: 151
},

johto: {
    name: "Johto",
    generation: "Geração II",
    start: 152,
    end: 251
},

hoenn: {
    name: "Hoenn",
    generation: "Geração III",
    start: 252,
    end: 386
},

sinnoh: {
    name: "Sinnoh",
    generation: "Geração IV",
    start: 387,
    end: 493
},

unova: {
    name: "Unova",
    generation: "Geração V",
    start: 494,
    end: 649
},

kalos: {
    name: "Kalos",
    generation: "Geração VI",
    start: 650,
    end: 721
},

alola: {
    name: "Alola",
    generation: "Geração VII",
    start: 722,
    end: 809
},

galar: {
    name: "Galar",
    generation: "Geração VIII",
    start: 810,
    end: 898
},

paldea: {
    name: "Paldea",
    generation: "Geração IX",
    start: 899,
    end: 1025
}

};

const typeColors = {

fire: "#F08030",
water: "#6890F0",
grass: "#78C850",
electric: "#F8D030",
psychic: "#F85888",
ice: "#98D8D8",
dragon: "#7038F8",
dark: "#705848",
fairy: "#EE99AC",
normal: "#A8A878",
fighting: "#C03028",
flying: "#A890F0",
poison: "#A040A0",
ground: "#E0C068",
rock: "#B8A038",
bug: "#A8B820",
ghost: "#705898",
steel: "#B8B8D0"

};

const params =
new URLSearchParams(window.location.search);

const regionName =
params.get("region");


if (!regions[regionName]) {

window.location.href = "index.html";

}

const region = regions[regionName];

regionTitle.textContent =
region.name;

regionGeneration.textContent =
region.generation;

const pokemonPerPage = 20;

let currentPage = 1;

let totalPages =
Math.ceil(
(region.end - region.start + 1)
/ pokemonPerPage
);

let currentPokemons = [];

async function getPokemon(id) {

const response =
    await fetch(
        `${apiUrl}pokemon/${id}`
    );

return await response.json();

}

async function loadPokemons() {

pokemonsContainer.innerHTML = "";

currentPokemons = [];


const start =
    region.start +
    (currentPage - 1) *
    pokemonPerPage;


const end =
    Math.min(
        start + pokemonPerPage - 1,
        region.end
    );


for (let id = start; id <= end; id++) {

    const pokemon =
        await getPokemon(id);

    currentPokemons.push(pokemon);

    createPokemonCard(pokemon);
}


updatePagination();

}

function createPokemonCard(pokemon) {

const card =
    document.createElement("div");

card.classList.add("pokemon");

const number =
    document.createElement("span");

number.classList.add(
    "pokemon-number"
);

number.textContent =
    `#${String(pokemon.id).padStart(3, "0")}`;


const image =
    document.createElement("img");
image.classList.add(
    "pokemon-image"
);
image.src =
    pokemon.sprites.other[
        "official-artwork"
    ].front_default;
image.alt =
    pokemon.name;

const name =
    document.createElement("h2");
name.classList.add(
    "pokemon-name"
);
name.textContent =
    pokemon.name;

const typesContainer =
    document.createElement("div");

typesContainer.classList.add(
    "pokemon-types"
);

const type1 =
    pokemon.types[0].type.name;
const type2 =
    pokemon.types[1]?.type.name;

const color1 =
    typeColors[type1];
const color2 =
    typeColors[type2];
if (type2) {
    card.style.background =
        `linear-gradient(
            135deg,
            ${color1},
            ${color2}
        )`;
} else {
    card.style.backgroundColor =
        color1;
}
createType(
    typesContainer,
    type1
);

if (type2) {
    createType(
        typesContainer,
        type2
    );
}

card.appendChild(number);
card.appendChild(image);
card.appendChild(name);
card.appendChild(typesContainer);
pokemonsContainer.appendChild(card);
}

function createType(container, type) {
const element =
    document.createElement("span");
element.classList.add(
    "pokemon-type"
);
element.textContent =
    type;
container.appendChild(element);
}

function updatePagination() {

pageNumber.textContent =
    `Página ${currentPage} de ${totalPages}`;

previousButton.disabled =
    currentPage === 1;

nextButton.disabled =
    currentPage === totalPages;
}

previousButton.addEventListener(
"click",
() => {
    if (currentPage > 1) {

        currentPage--;

        loadPokemons();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

nextButton.addEventListener(
"click",
() => {
    if (currentPage < totalPages) {

        currentPage++;

        loadPokemons();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

backButton.addEventListener(
"click",
() => {
    window.location.href =
        "index.html";
});

searchInput.addEventListener(
"input",
() => {
    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const cards =
        document.querySelectorAll(
            ".pokemon"
        );

    currentPokemons.forEach(
        (pokemon, index) => {
            const card =
                cards[index];
            if (
                pokemon.name
                    .toLowerCase()
                    .includes(search)
            ) {
                card.style.display =
                    "flex";
            } else {
                card.style.display =
                    "none";
            }
        }
    );
}
);

loadPokemons();