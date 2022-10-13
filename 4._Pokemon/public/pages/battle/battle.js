//const pathVariables = location.pathname.split("/");
//const pokemonName = pathVariables.pop();

//console.log(pokemonName);

fetch(`https://pokeapi.co/api/v2/pokemon${pokemonName}`)
.then(response => response.json())
.then(pokemon => {
    console.log(pokemon);

    const  battlingPokemonImage = document.getElementById("Battling-pokemon-sprite");
    battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default;

    const iWon = Math.random() >= 0.5;
    const whoWonHeader = document.getElementById("who-won");


    if(iWon) {
        console.log("I won");
    } else {
        console.log("I lost")
    }
});
