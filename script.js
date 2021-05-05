/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
'use strict';

let numberOfFilms = '';

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	rememberMyFilms: function() {
		for(let i = 0; i < 2; i++) {
			const filmData = this.getFilm();
			if(filmData)
				this.movies[filmData[0]] = filmData[1];
			else
				i--;
		}
	},
	detectPersonalLevel: function() {
		if(this.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if(this.count <= 30) {
			console.log("Вы классический зритель");	
		} else if(this.count > 30){
			console.log("Вы киноман");
		} else console.log("Произошла ошибка");	
	},
	getFilm: function() {
		let filmName = this.getFilmName();
		if(!filmName || filmName.length > 50) {
			return false;
		}
		let	filmScore = this.getFilmScore();
		if(!filmScore) {
			return false;
		}
		return [filmName, filmScore];
	},
	getFilmName: function() {
		return prompt('Один из последних просмотренных фильмов?');
	},
	getFilmScore: function() {
		return prompt('На сколько оцените его?', '8.1');
	},
	showMyDB: function() {
		if(!this.privat) {
			console.log(this);
		}
	},
	writeYourGenres: function() {
		for(let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if(genre)
				this.genres.push(genre);
			else
				i--;
		}
		this.genres.forEach(function(elem, ind) {
			console.log(`Любимый жанр #${ind + 1} - это ${elem}`);
		});
	},
	toggleVisibleMyDB: function() {
		this.privat = !this.privat;
	}
}

start();

function start() {
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
	// personalMovieDB.rememberMyFilms();
	// personalMovieDB.detectPersonalLevel();
	personalMovieDB.writeYourGenres();
	personalMovieDB.showMyDB();
}