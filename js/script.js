"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
    const a = prompt("Один их просмотренных фильмов?"),
          b = prompt("На сколько его оцените?");
    if (a != null && b != null && a != "" && b != "" & a.length < 50 && b.length < 50) {
        personalMovieDB[a] = b;
    } else {
        i--;
    }
}


console.log(personalMovieDB);