import { response } from "express";


const pokemonDiv = document.getElementById("pokemon");

/* setTimeout(() => {
    window.location.replace("battle"); 
}, 3000); */ 

/*fetch("/api/pokemon")
    .then(response => response.json())
    .then(result => {
        result.data.results.forEach(pokemon => {
            const pokemonIndividualDiv = document.createElement("div");
            const pokemonNameP = document.createElement("p");
            pokemonNameP.innerText = pokemon.name;


            pokemonIndividualDiv.appendChild(pokemonNameP);
            pokemonDiv.appendChild(pokemonIndividualDiv);
        });
    }); */
