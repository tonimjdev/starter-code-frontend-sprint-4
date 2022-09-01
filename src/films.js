// IT Academy - Itinerari ANGULAR - Sprint 4 - Alumne: Toni Machado
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
// Creem una funció per calcular la mitjana de les puntuacions
function moviesAverage(arrayReduce) {
  // Amb "reduce" obtenim la puntuació mitjana sumant puntuacions. Després dividim per la longitud de l'array
  let arrayAverage = Number(
    (arrayReduce.reduce((a, b) => a + b.score, 0) / arrayReduce.length).toFixed(
      2
    )
  );
  return arrayAverage;
}
// Aprofitem la funció "getMoviesFromDirector()" per fer array amb les pelicules del director triat
function moviesAverageOfDirector(array, director) {
  let moviesDirector = getMoviesFromDirector(array, director);
  // Calculem la mitjana amb la funció "moviesAverage"
  let result = moviesAverage(moviesDirector);
  console.log('EXERCICE 3 ->', result.toFixed(2));
  return Number(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  // Amb "map" recorrem els titols de les pelicules i els ordenem amb "sort"
  let result = array.map((x) => x.title).sort();
  // Filtrem només els 20 primers resultats amb un condicional
  if (result.length > 20) {
    result.length = 20;
  }
  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // Recorrem tots els objectes y categories de l'array amb "map"
  let result = array
    .map((x) => ({ ...x }))
    .sort((a, b) => {
      // Endrecem per any amb els condicionals del "sort"
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      // Endrecem per titol, en cas de mateix any
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  // Filtrem l'array per categoria i que tingui puntuació
  let moviesCat = array.filter(
    (x) => x.genre.includes(category) && typeof x.score === 'number'
  );
  // Utilitzem la funció creada a l'exercici 3 per calcular la mitjana
  let result = moviesAverage(moviesCat);
  console.log('EXERCICE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // Recorrem l'array amb "map" i creem funcio
  let result = array.map(function (x) {
    let min = 0;
    // Fem servir "split" per separar hores i minuts
    let parts = x.duration.split(' ');
    // Ternari per calcular els minuts totals segons si hi ha minuts o no
    // Amb "parseInt" agafem només el numero enter
    min =
      parts.length == 2
        ? parseInt(parts[0]) * 60 + parseInt(parts[1])
        : parseInt(parts[0]) * 60;
    return { ...x, duration: min };
  });
  console.log('EXERCICE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  // Filtrem pel.licules de l'any triat
  let moviesYear = array.filter((x) => x.year == year);
  // Endrecem per puntuació de major a menor
  let moviesSort = moviesYear.sort((a, b) => b.score - a.score);
  // La millor pel.licula de l'any es troba a la posició 0 de l'array
  let result = [moviesSort[0]];
  console.log('EXERCICE 8 ->', result);
  return result;
}

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
