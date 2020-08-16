
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
/*
console.log(css);
console.log(color1);
console.log(color2);
*/
var body = document.getElementById("gardient");
var button = document.getElementById("enter");



function setGradient(){
  body.style.background  = "linear-Gradient(to right, " + color1.value + "," +color2.value +")";

  css.textContent = body.style.background +";";
}

document.addEventListener("input",setGradient);

document.addEventListener("input",setGradient);

function randomColor(){
  //console.log("hihi");
  var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  body.style.background  = "linear-Gradient(to right, " + "#" + randomColor1 + "," + "#" + randomColor2 +")";
  css.textContent = body.style.background +";";
}

button.addEventListener("click", randomColor);
