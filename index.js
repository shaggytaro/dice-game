var randomNumber1 = Math.floor (Math.random() * 6) +1 ; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() *6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);


// if player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "✊Player 1 wins!";
} 
else if (randomNumber2 > randomNumber1){ //if player 2 wins
    document.querySelector('h1').innerHTML = "Player 2 wins!✊";
}
else{ //if its a draw
    document.querySelector('h1').innerHTML = "It's a tie!🤝";
}

