'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");

    while(isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == '') {
        numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let filmQuestion = prompt("Один з останніх переглянутих фільмів?", "");
        let rateQuestion = prompt("На скільки оціните його?", "");

        if (filmQuestion == null || filmQuestion == '' || filmQuestion.length > 50 || rateQuestion == null || rateQuestion == '') {
            console.log("Некоректні дані"); 
            i--;
            continue;
        }

        personalMovieDB.movies[filmQuestion] = rateQuestion;
    }
}

rememberMyFilms();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр ${i}`);
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(`Переглянуто доволі мало фільмів.`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert(`Ви переглянули класичну кількість фільмів!`);
    } else if (personalMovieDB.count >= 30) {
        alert(`Ви кіноман!`);
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private !== true) {
        console.log(personalMovieDB);
    }
}

showMyDB();