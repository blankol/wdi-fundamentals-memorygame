var cards = ["queen", "queen", "king", "king"];

/*var cardsInPlay = [cardOne]
var cardsInPlay = [cardTwo]
var cardsInPlay = [cardThree]
var cardsInPlay = [cardFour]*/

//var cardOne = cards [0];
//var cardTwo = cards [1];
//var cardThree = cards [2];
//var cardFour = cards [3];


//cardsInPlay.push("cardOne");
//console.log("User flipped " + cardOne);

//cardsInPlay.push("cardTwo");
//console.log("User flipped " + cardTwo);


var cardsInPlay = []

// if (cardsInPlay.length === 2)
    { if (cardsInPlay[0] === cardsInPlay [1]) {
    alert("You found a match!")} 
    else { 
        alert("Sorry, try again!")
    };
}

var flipCard = function (cardId) {
    console.log ("User flipped" + cards[cardId]); //check again
    cardsInPlay.push("cards[cardId]");
}

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        } else {
        alert("Sorry, try again!");
        }
}