
//produce random number between 1-6:
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

//produce random dice number from img's:
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

//change img src to include nested file:
var randomDiceSrc1 = "images/" + randomDice1;
var randomDiceSrc2 = "images/" + randomDice2;

//query select image 1:
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];


//change dice roll on left dice:
image1.setAttribute("src", randomDiceSrc1);
//change dice roll on right dice:
image2.setAttribute("src", randomDiceSrc2);


//change h1 text to display winner or 'draw'.
function selectWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "⛳️Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "🔥Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "💀Try Again!💀";
    }
}
