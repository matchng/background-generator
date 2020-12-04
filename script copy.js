var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function colorRandom(){
	var newColor1 = makeColor();
	var newColor2 = makeColor();
	color1.value = newColor1;
	color2.value = newColor2;
	setGradient();
}


function makeColor(){
	var arr = [];
	for(var i=0; i<3 ; i++){
		var num = Math.floor(Math.random()*256);
		arr.push(num);
	}
	var a = arr[0];
	var b =arr[1];
	var c =arr[2];
	return "#" + ((1 << 24) + (a << 16) + (b << 8) + c).toString(16).slice(1);
}

// function rgbToHex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

window.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", colorRandom);




