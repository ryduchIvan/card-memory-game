const cardBox = document.querySelector(`.card__box`);//получили в константку родителя карточек

const cardsArr = [//создаем массив с название карточек и с путем к картинкам 
	{ imageName: "image1", imagePath: "img/cherry.svg" },
	{ imageName: "image2", imagePath: "img/darts.svg" },
	{ imageName: "image3", imagePath: "img/dog.svg" },
	{ imageName: "image4", imagePath: "img/dolphins.svg" },
	{ imageName: "image5", imagePath: "img/fire.svg" },
	{ imageName: "image6", imagePath: "img/globus.svg" },
	{ imageName: "image7", imagePath: "img/hat.svg" },
	{ imageName: "image8", imagePath: "img/lion.svg" },
	{ imageName: "image9", imagePath: "img/piano.svg" },
	{ imageName: "image10", imagePath: "img/pizza.svg" },
	{ imageName: "image11", imagePath: "img/present.svg" },
	{ imageName: "image12", imagePath: "img/silly.svg" },
	{ imageName: "image1", imagePath: "img/cherry.svg" },
	{ imageName: "image2", imagePath: "img/darts.svg" },
	{ imageName: "image3", imagePath: "img/dog.svg" },
	{ imageName: "image4", imagePath: "img/dolphins.svg" },
	{ imageName: "image5", imagePath: "img/fire.svg" },
	{ imageName: "image6", imagePath: "img/globus.svg" },
	{ imageName: "image7", imagePath: "img/hat.svg" },
	{ imageName: "image8", imagePath: "img/lion.svg" },
	{ imageName: "image9", imagePath: "img/piano.svg" },
	{ imageName: "image10", imagePath: "img/pizza.svg" },
	{ imageName: "image11", imagePath: "img/present.svg" },
	{ imageName: "image12", imagePath: "img/silly.svg" },
]

cardsArr.sort(function () {//сортеруем массив в случайном порядке 
	return 0.5 - Math.random();
})

function createBoard() {//создаем функцию которая
	for (let key in cardsArr) {//перебирает массив 
		let card = document.createElement(`div`);//и создаем див
		card.classList.add(`card__item`);//добовляем класс диву
		let cardImg = document.createElement(`img`);//и тег имг
		cardImg.setAttribute("src", "img/zamok.svg");//добовляем дефолтную фотку карточке
		cardImg.setAttribute("id", String(key));//вешаем на имг атрибут id со значением перебора 
		cardImg.addEventListener(`click`, flipCard);//вашаем клик на имг , и запускаем функцию flipCard
		card.appendChild(cardImg);//добовляем в див имг 
		cardBox.appendChild(card);//добовляем див в родител ( в итоге получаеться 12 карточек )
	}
}
createBoard();//создаем карточки 

let cardsChoosenArr = [];//массив для выбраних карточек
let cardsChoosenArrId = [];//массив для id выбраних карточек
let nOfOpendCardsArr = 0;//массив для количества выбраних карточек

function flipCard(event) {//создаем функцию  flipcard
	let cardId = this.getAttribute("id");//создаем переменую card id которая будет ровняться id карточки на которую мы наали

	cardsChoosenArr.push(cardsArr[cardId].imageName);//пушим в массив название данной карточки в массив
	cardsChoosenArrId.push(cardId);//в массив для id пушим id той карточки на которую мы нажали 
	this.setAttribute(`src`, cardsArr[cardId].imagePath);//присваиваем src карточки соотвествующи атрбиут imagePath 

	if (cardsChoosenArr.length === 2) {//если мы открили 2 карточки
		setTimeout(checkForMatch, 1000);//то седлать задержку для срабатывание основной функции
	}
}

function checkForMatch() {
	const cards = document.querySelectorAll(`img`);//создаем массив для всех карточек

	const id1 = cardsChoosenArrId[0];//создаем переменую для id первого и второго выбраного изображения
	const id2 = cardsChoosenArrId[1];

	if (cardsChoosenArr[0] === cardsChoosenArr[1] && id1 !== id2) {//сравниваем если imageName у карточек совпадает и это не одна и та же карточка
		console.log(`Match found`);//вводим в консоль true
		nOfOpendCardsArr++;
		cards[id1].setAttribute(`src`, `img/smile.svg`);//эти две карточки получают смайл
		cards[id2].setAttribute(`src`, `img/smile.svg`);

		cards[id1].removeEventListener(`click`, flipCard);//убираем клик у двух правильно выбраних карточек
		cards[id2].removeEventListener(`click`, flipCard);
	} else {//если нет совпадения
		cards[id1].setAttribute("src", "img/zamok.svg");//тогда возращаем дефолтную картинку
		cards[id2].setAttribute("src", "img/zamok.svg");
		console.log(false);//виводим в консоль false

	}

	cardsChoosenArr = [];
	cardsChoosenArrId = [];

	console.log(nOfOpendCardsArr);
	console.log(cardsArr.length);
	if (nOfOpendCardsArr == cardsArr.length / 2) {//если количесвто октрытих пар карточек будет равно половине длинне массива
		console.log(`game over flowwer`);
	}
}