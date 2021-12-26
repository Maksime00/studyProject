"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Послендий просмотренный фильм?', ''),
      b = prompt('Какую дадите оценку?', ''),
      c = prompt('Послендий просмотренный фильм?', ''),
      d = prompt('Какую дадите оценку?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);