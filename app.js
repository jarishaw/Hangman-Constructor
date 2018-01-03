//GLOBAL VARIABLES

var inquirer = require('inquirer');
var path = require('path');

var wordOptions = ["black", "red", "blue", "purple"];
var selectedWord = "";
var lettersinWord = [];
var numberofBlanks = 0;
var blanksandSuccesses = [];

var guessesLeft = 3;

//FUNCTIONS

function startGame() {
	//randomly selects a word from the wordOptions array
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split(""); 
	// // breaks it into an array of individual letters
	numberofBlanks = lettersinWord.length; 

	// Reset
	guessesLeft = 3;
	blanksandSuccesses = [];

	for (var i = 0; i<numberofBlanks; i++){
		blanksandSuccesses.push("_"); 
	}

	var selectedWord = blanksandSuccesses.join(" ");
	var numberofGuesses = guessesLeft;


	// console.log(selectedWord);
	// console.log(lettersinWord);
	// console.log(numberofBlanks) 
	// console.log(blanksandSuccesses);
	console.log(selectedWord);
	console.log("You have " + numberofGuesses + " left!");
}

//Logic Of Game
//create a function that checks if the letter input by the user exists in the word 
//a for loop checks if that letter in the words matches a letter in the word
	//if letter is in the word, determine every blank where it exists in the word and populate the blanksandsuccesses array
	//if letter is not in the word, decrease number of guesses left 

// function checkLetter(letter) {
// 	// console.log(letter);
// 	var isLetterInWord = false;

// 	for (var i = 0; i < numberofBlanks; i++) {
// 		if(selectedWord[i] == letter) {
// 			isLetterInWord = true;
// 			console.log("letter found");
// 		}

// 	}
	
// 	if(isLetterInWord) {
// 		for (var i = 0; i < numberofBlanks; i++) {
// 			if (selectedWord[i] == letter){
// 			blanksandSuccesses[i] = letter;
// 			}
// 		}
// 	}
	
// 	else {
// 		guessesLeft--
// 	}
// }

//create a function for when a round is complete
	//it should check if the user has guessed all the letters in the word(displays user won)
	//it should check if the user guesses = 0(displays user lost)

//The game should then start over using startGame(), generating a new word to guess




//MAIN PROCESS


startGame();

// var letterGuess = function(letter) {
// 	this.letter = letter;
// }

//prompt user for input of a letter guess
inquirer
	.prompt([
		{
			type: "input",
			message: "Guess a letter!",
			name: "letter"
		}
	])
	// .then(function(user) {
	
	// 	if(user.input === ""){
	// 		console.log("You selected: " + user.letter);
	// 	}
	// });


	