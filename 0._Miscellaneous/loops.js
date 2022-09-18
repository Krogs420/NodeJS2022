const marvelMovies = [
    {name: "Spiderman - No Way Home", year: 2020},
    {name: "Avengers - Endgame", year: 2018}, 
    {name: "Dr. Stange - Multiverse of Madness", year: 2021}, 
    {name: "The Ironman", year: 2012}
];

const ratedMarvelMovies = marvelMovies.map((movie) => {
    movie.rating = 10;
    return movie;
});

const recentMarvelMovies = marvelMovies.filter(movie => movie.year > 2019);
console.log(recentMarvelMovies);


//Loop metoder
// forEach
// map, reduce, filter