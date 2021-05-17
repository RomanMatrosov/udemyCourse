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
updateFilmList();
function updateFilmList() {
	movieDB.movies.sort();
	const films = document.querySelector('.promo__interactive-list');
	films.innerHTML = "";
	movieDB.movies.forEach((elem, ind) => {
		films.innerHTML += `
			<li class="promo__interactive-item">${ind + 1}) ${elem}<div class="delete"></div></li>
		`;
	});

	const deleteFilms = document.querySelectorAll('.promo__interactive-item .delete');
	deleteFilms.forEach((elem) => {
		elem.addEventListener('click', deleteFilm);
	});
}

//add new film in list
const form = document.querySelector('form.add'),
	  btn = form.querySelector('button');

btn.addEventListener('click', btnClick);

function deleteFilm(e) {
	const curLi = e.target.parentElement,
		  number = curLi.textContent.slice(')')[0];
	movieDB.movies.splice(number - 1, 1);
	updateFilmList();
}

function btnClick(event) {
	event.preventDefault();
	const newFilmName = form.querySelector('.adding__input');
	let name = newFilmName.value;
	if(name) {
		//cut big name
		if(name.length > 21) {
			name = name.substr(0, 21) + '...';
		}
		addFilm(name);
		if(form.querySelector('input[type="checkbox"]').checked) {
			console.log("Добавляем любимый фильм");
		}
	}
}

function addFilm(film) {
	movieDB.movies.push(film);
	updateFilmList();
}