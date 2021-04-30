/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = '';

start();

function start() {
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

rememberMyFilms();
detectPersonalLevel(personalMovieDB.privat);
writeYourGenres();
showMyDB();

function rememberMyFilms() {
	for(let i = 0; i < 2; i++) {
		const filmData = getFilm();
		personalMovieDB.movies[filmData[0]] = filmData[1];
	}
}

function detectPersonalLevel() {
	if(personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");	
	} else if(personalMovieDB.count > 30){
		console.log("Вы киноман");
	} else console.log("Произошла ошибка");	
}

function getFilm() {
	let filmName = getFilmName(),
		filmScore = getFilmScore();
	if(!filmName || filmName.length > 50 || !filmScore) {
		const filmData = getFilm();
		filmName = filmData[0];
		filmScore = filmData[1];
	}
	return [filmName, filmScore];
}

function getFilmName() {
	return prompt('Один из последних просмотренных фильмов?');
}

function getFilmScore() {
	return prompt('На сколько оцените его?', '8.1');
}

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
	}
}