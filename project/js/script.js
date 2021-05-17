/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//removing ads
const ads = document.querySelectorAll('.promo__adv img');
ads.forEach(function(elem) {
	elem.remove();
});


//change genre
document.querySelector('.promo__genre').textContent = "ДРАМА";

//change bg
document.querySelector('.promo__bg').style.backgroundImage = 'url("./img/bg.jpg")';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//set films list with numbers by alphabet
movieDB.movies.sort();
const films = document.querySelector('.promo__interactive-list');
films.innerHTML = "";
movieDB.movies.forEach((elem, ind) => {
	films.innerHTML += `
		<li class="promo__interactive-item">${ind + 1}) ${elem}</li>
	`;
});