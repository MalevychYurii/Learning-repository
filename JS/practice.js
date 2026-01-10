/* Задание на урок:

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;

while (true) {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    
    if (!isNaN(numberOfFilms) && numberOfFilms > 0) {
        break; // Вихід з циклу, якщо число коректне
    }
    
    alert("Введіть коректне число!");
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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

if (personalMovieDB.count < 10) {
    alert(`Переглянуто доволі мало фільмів.`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert(`Ви переглянули класичну кількість фільмів!`);
} else if (personalMovieDB.count >= 30) {
    alert(`Ви кіноман!`);
}

console.log(personalMovieDB);