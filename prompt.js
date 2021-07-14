function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function genCatweet(valLength) {
	const isCat = getRandomInt((valLength % 22) + 3);
	if (isCat == 2) {
		const meow0 = getRandomInt(meowOfCat0.length);
		const meow1 = getRandomInt(meowOfCat1.length);
		const meow2 = getRandomInt(meowOfCat2.length);
		const meow3 = getRandomInt(meowOfCat3.length);
		return meowOfCat0[meow0] + meowOfCat1[meow1] + meowOfCat2[meow2] + meowOfCat3[meow3];

	} else {
		const targetInt = getRandomInt(meowOfCat4.length);
		return meowOfCat4[targetInt];
	}
	
};

function Meowize() {
	const textbox = document.getElementById("meow");
	const inputValue = textbox.value;
	const valLength = inputValue.length;
	const figureInt = getRandomInt(figureOfCat.length);
	const outputValue = genCatweet(valLength);
	const outputFigure = figureOfCat[figureInt];

	const catweet = "https://twitter.com/intent/tweet?text=" + outputFigure +" < " + outputValue + "&hashtags=社会性フィルター";
	
	document.getElementById("meow").value = outputValue;
	window.open(catweet);
};

document.getElementById("meowButton").onclick = function () {
	Meowize();
};

