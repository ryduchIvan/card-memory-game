const cardBox = document.querySelector(`.card__box`);

//popup
const popup = document.querySelector(`.popup`);
const numberOfCorrectPair = document.querySelector(`.number_of_correct_pair`);
const numberOfChange = document.querySelector(`.number_of_change`);
const btnTryAgain = document.querySelector(`.btn_try_again`);
const numberOfChangeDesktop = document.querySelector(`.number_of_change_desktop`);
const slider = document.querySelector(`.slider`);
const sliderBox = document.querySelector(`.slider__box`);
const popupResult = document.querySelector(`.popup__result`);

let cardsChoosenArr = [];
let cardsChoosenArrId = [];
let nOfSamePair = 0;
let count = 0;

const cardsArr = [
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
];
numberOfChangeDesktop.textContent = 0;

cardsArr.sort(function () {
	return 0.5 - Math.random();
});

function createCards() {
	for (let key in cardsArr) {
		let card = document.createElement(`div`);
		let cardImg = document.createElement(`img`);
		cardImg.setAttribute(`id`, key);
		cardImg.setAttribute(`src`, `img/zamok.svg`);
		cardImg.addEventListener(`click`, flipCard);
		card.classList.add(`card__item`);
		card.appendChild(cardImg);
		cardBox.appendChild(card);
	}
}
createCards();

function flipCard() {
	let cards = document.querySelectorAll(`img`);
	let id = this.getAttribute(`id`);
	cardsChoosenArr.push(cardsArr[id].imageName);
	cardsChoosenArrId.push(id);
	this.setAttribute(`src`, cardsArr[id].imagePath);

	if (cardsChoosenArr.length == 2) {
		cards.forEach(function (item) {
			item.removeEventListener(`click`, flipCard);
		});
		setTimeout(() => {
			compareCards();
		}, 1000);
	}
}

function compareCards() {
	count++;
	slider.style.width = count * 2 + `%`;
	numberOfChangeDesktop.textContent = count;
	let cards = document.querySelectorAll(`img`);
	cards.forEach(function (item) {
		item.addEventListener(`click`, flipCard);
	})
	let id1 = cardsChoosenArrId[0];
	let id2 = cardsChoosenArrId[1];
	if (cardsChoosenArr[0] == cardsChoosenArr[1] && id1 != id2) {
		cards[id1].setAttribute(`src`, `img/smile.svg`);
		cards[id2].setAttribute(`src`, `img/smile.svg`);
		nOfSamePair++;
		cards[id1].removeEventListener(`click`, flipCard);
		cards[id2].removeEventListener(`click`, flipCard);
	} else {
		cards[id1].setAttribute(`src`, `img/zamok.svg`);
		cards[id2].setAttribute(`src`, `img/zamok.svg`);
	}

	cardsChoosenArr = [];
	cardsChoosenArrId = [];
	if (nOfSamePair == cardsArr.length / 2) {
		createPopup(`You won`);
	}
	if (count > 50) {
		createPopup(`You lose`);
	}
	console.log(count);
}
function createPopup(result) {
	popup.classList.add(`show-popup`);
	popupResult.textContent = result
	numberOfChange.textContent = count;
	numberOfCorrectPair.textContent = nOfSamePair;
	btnTryAgain.addEventListener(`click`, function () {
		window.location.reload();
	})
}
