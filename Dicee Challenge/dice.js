var randomNumber1=(Math.floor(Math.random()*6))+1;
var randomDiceImage="dice"+randomNumber1+".png";
// console.log(randomNumber1);
var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2=(Math.floor(Math.random()*6))+1;
var randomDiceImage="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);