
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var dice1 = "dice" + randomNumber1 +".png";
var link = "images/" + dice1;


document.querySelectorAll("img")[0].setAttribute("src", link);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dice2 = "dice" + randomNumber2 +".png";
var link2 = "images/" + dice2;
document.querySelectorAll("img")[1].setAttribute("src", link2);


function result(){
  if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
  }
  else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
}

result();
