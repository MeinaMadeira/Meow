function Meowize() {
	const textbox = document.getElementById("meow");
	const inputValue = textbox.value;
	const catweet = "https://twitter.com/intent/tweet?text=" + inputValue
	
	document.getElementById("postmeow").innerHTML = "monimoni";
	document.getElementById("meowlink").href = catweet;
}

document.getElementById("meowButton").onclick = function () {
	Meowize();
};

