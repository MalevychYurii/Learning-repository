'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?");
        
        while(isNaN(personalMovieDB.count) || personalMovieDB.count == null || personalMovieDB.count == '') {
            personalMovieDB.count = +prompt("Скільки фільмів ви вже переглянули?");
    }},
    rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
        let filmQuestion = prompt("Один з останніх переглянутих фільмів?", "").trim();
        let rateQuestion = prompt("На скільки оціните його?", "").trim();

        if (filmQuestion == null || filmQuestion == '' || filmQuestion.length > 50 || rateQuestion == null || rateQuestion == '') {
            console.log("Некоректні дані"); 
            i--;
            continue;
        }

        personalMovieDB.movies[filmQuestion] = rateQuestion;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert(`Переглянуто доволі мало фільмів.`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert(`Ви переглянули класичну кількість фільмів!`);
        } else if (personalMovieDB.count >= 30) {
            alert(`Ви кіноман!`);
        }
    },
    showMyDB: function() {
        if (personalMovieDB.private !== true) {
            console.log(personalMovieDB);
        }
    },
     writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш улюблений жанр ${i}`);

            if (genre === '' || genre === null) {
                console.log('Ви ввели некоректні данні!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
}