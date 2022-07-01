const cardsDiv = document.querySelector(`.card__box`);

const cardsArr = [
	{
		imageName: "image1", imagePath: "img/cherry.svg"
	},
	{
		imageName: "image2", imagePath: "img/darts.svg"
	},
	{
		imageName: "image3", imagePath: "img/dog.svg"
	},
	{
		imageName: "image4", imagePath: "img/dolphins.svg"
	},
	{
		imageName: "image5", imagePath: "img/fire.svg"
	},
	{
		imageName: "image6", imagePath: "img/globus.svg"
	},
	{
		imageName: "image7", imagePath: "img/hat.svg"
	},
	{
		imageName: "image8", imagePath: "img/lion.svg"
	},
	{
		imageName: "image9", imagePath: "img/piano.svg"
	},
	{
		imageName: "image10", imagePath: "img/pizza.svg"
	},
	{
		imageName: "image11", imagePath: "img/present.svg"
	},
	{
		imageName: "image12", imagePath: "img/silly.svg"
	},
	{
		imageName: "image13", imagePath: "img/sunlower.svg"
	},
	{
		imageName: "image16", imagePath: "img/umberella.svg"
	},
	{
		imageName: "image1", imagePath: "img/cherry.svg"
	},
	{
		imageName: "image2", imagePath: "img/darts.svg"
	},
	{
		imageName: "image3", imagePath: "img/dog.svg"
	},
	{
		imageName: "image4", imagePath: "img/dolphins.svg"
	},
	{
		imageName: "image5", imagePath: "img/fire.svg"
	},
	{
		imageName: "image6", imagePath: "img/globus.svg"
	},
	{
		imageName: "image7", imagePath: "img/hat.svg"
	},
	{
		imageName: "image8", imagePath: "img/lion.svg"
	},
	{
		imageName: "image9", imagePath: "img/piano.svg"
	},
	{
		imageName: "image10", imagePath: "img/pizza.svg"
	},
	{
		imageName: "image11", imagePath: "img/present.svg"
	},
	{
		imageName: "image12", imagePath: "img/silly.svg"
	},
	{
		imageName: "image13", imagePath: "img/sunlower.svg"
	},
	{
		imageName: "image16", imagePath: "img/umberella.svg"
	}
]

cardsArr.sort(function () {
	return 0.5 - Math.random();
})//??????????????????

function createBoard() {
	for (let i = 0; i < cardsArr.length; i++) {
		let imgCard = document.createElement(`img`);
		imgCard.setAttribute(`id`, String(i));
		imgCard.classList.add(`card__item`);
		imgCard.addEventListener(`click`, flipCard);
		cardsDiv.appendChild(imgCard);
	}
}
createBoard();

let cardsChosenArr = [];
let cardsChosenArrId = [];
let nOfOpendCardsArr = [];

function checkForMatch() {
	const cards = document.querySelectorAll(`img`);

	const id1 = cardsChosenArrId[0];
	const id2 = cardsChosenArrId[1];

	if (cardsArr[0] === cardsChosenArr[1] && id1 != id2) {
		cards[id1].setAttribute(`src`, "img/smile.svg");
		cards[id2].setAttribute(`src`, "img/smile.svg");
	}
}