// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // Amb "map" recorrem l'array d'objectes i retornem un nou array amb el director
  let result = array.map((x) => x.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // Amb "filter" retornem un array amb les pelicules del director triat
  let result = array.filter((x) => x.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
// Aprofitem la funció "getMoviesFromDirector()" per fer array amb les pelicules del director triat
function moviesAverageOfDirector(array, director) {
  let moviesDirector = getMoviesFromDirector(array, director);
  // Amb "reduce" obtenim la puntuació mitjana sumant puntuacions. Després dividim per la longitud de l'array
  let result =
    moviesDirector.reduce((a, b) => a + b.score, 0) / moviesDirector.length;
  console.log('EXERCICE 3 ->', result.toFixed(2));
  return Number(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
