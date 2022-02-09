const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function (films) {
  const titles = films.map((film) => {
      return film.title;
  });
  return titles;
}

Cinema.prototype.findFilmByTitle = function (films, title) {
  const foundFilm = films.find(film => film.title === title);
  return foundFilm;
};

// Cinema.prototype.filterFilmsByGenre = function (films, genre) {
//   const filteredFilms = films.filter(film => film.genre === genre);
//   return filteredFilms;
// }

Cinema.prototype.checkReleaseDate = function (films, year) {
  const result = films.some(film => film.year === year);
  return result;
}

Cinema.prototype.checkFilmLength = function (films, length) {
  const result = films.every(film => film.length >= length);
  return result;
}

Cinema.prototype.calculateTotal = function (films) {
  const filmList = films.map((film) => {
    return film.length;
  });
  const total = filmList.reduce((runningTotal, length) => {
    return runningTotal + length;
  })
  return total;
}

Cinema.prototype.filmsByProperty = function (films, property, value) {
  if (property === 'year') {
    const filteredFilms = films.filter(film => film.year === value);
    return filteredFilms;
  } else if (property === 'genre') {
    const filteredFilms = films.filter(film => film.genre === value);
    return filteredFilms;
  }
};

module.exports = Cinema;
