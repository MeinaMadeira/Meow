const meowOfCat = [
	"にゃーん",
	"うなーお",
	"なむなむ",
	"カッカッカッ",
	"フシャーッ",
	"うるるるる…",
	"ごあーん",
	"ぎゃぅ",
	"んみゃあ",
	"んんー",
	"ひぁー",
	"みゃおう"
];


function Meowize() {
	const textbox = document.getElementById("meow");
	const inputValue = textbox.value;
	const meowInt = inputValue.length % meowOfCat.length;
	const outputValue = meowOfCat[meowInt];


	const catweet = "https://twitter.com/intent/tweet?text=" + "🐈 < " + outputValue + "&hashtags=社会性フィルター";
	
	document.getElementById("postmeow").innerHTML = outputValue;
	document.getElementById("meowlink").href = catweet;
	document.getElementById("meow").value = outputValue;
}

document.getElementById("meowButton").onclick = function () {
	Meowize();
};

