function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Meowize() {
	const textbox = document.getElementById("meow");
	const inputValue = textbox.value;
	const meowInt = inputValue.length % meowOfCat.length;
	const figureInt = getRandomInt(figureOfCat.length);
	const outputValue = meowOfCat[meowInt];
	const outputFigure = figureOfCat[figureInt];

	const catweet = "https://twitter.com/intent/tweet?text=" + outputFigure +" < " + outputValue + "&hashtags=社会性フィルター";
	
	document.getElementById("meow").value = outputValue;
	window.open(catweet);
}

document.getElementById("meowButton").onclick = function () {
	Meowize();
};

