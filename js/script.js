"use strict";

const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотренных фильмов?"),
      b = prompt("На сколько его оцените?"),
      c = prompt("Один из просмотренных фильмов?"),
      d = prompt("На сколько его оцените?");

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log(personalMovieDB);