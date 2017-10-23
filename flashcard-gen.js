// call for inquirer package -- must install this package first!
var inquirer = require("inquirer");

// call for Basic and Cloze constructors
var Cloze = require("./ClozeCard.js");
var Basic = require("./BasicCard.js");

var nodeArgs = process.argv;

var cardType = ""; // determines whether cards are basic or cloze-deleted
var basic;
var cloze;

var basicCards = []; // stores basic flashcard objects
var clozeCards = []; // stores cloze-deleted flashcard objects

// ***** Use the Flashcard Generator *****

// Ask the user whether they want to make basic or cloze-deleted flashcards
inquirer.prompt([
	{
		name: 'cardType',
		message: 'What type of flashcards would you like to build? (basic / cloze)'
	}
]).then(function(answers) {

	// console.log("\n");
	cardType = answers.cardType.toLowerCase();

	switch (cardType) {
		case 'basic':
			basicGen();
		break;

		case 'cloze':
			clozeGen();
		break;
	}
})


// ***** FUNCTIONS *****

// Prompts user to generate new basic flashcard
function basicGen() {

	inquirer.prompt([
		{
			name: 'frontText',
			message: '\nWhat is the question or statement for this card?'
		},
		{
			name: 'backText',
			message: '\nWhat is the correct answer for this card?'
		}
	]).then(function(answers){

		basic = Basic(answers.frontText, answers.backText);

		basicCards.push(basic);

		console.log("\nNew card created! \nQuestion: " + answers.frontText
			+ "\nAnswer: " + answers.backText);

		nextCard(cardType, basicCards);
	})
} // END OF basicGen function

// Prompts user to generate new basic flashcard
function clozeGen() {

	inquirer.prompt([
		{
			name: 'completeText',
			message: '\nWhat is the full question or statement for this card?'
		},
		{
			name: 'clozeText',
			message: '\nWhat part of the question/statement should be removed?'
		}
	]).then(function(answers){

		cloze = Cloze(answers.completeText, answers.clozeText);

		if (cloze.error === false){

			clozeCards.push(cloze);

			console.log("\nNew card created! \nComplete Question: " + answers.completeText
				+ "\nAnswer: " + answers.clozeText);

			nextCard(cardType, clozeCards);
		}

		else {
			console.log("Card NOT created!");
			nextCard(cardType, clozeCards);
		}
	})
} // END OF clozeGen function

function nextCard(type,arr){

	inquirer.prompt([
	{
		name: 'newCard',
		message: '\nWould you like to make another card? (yes / no)'
	}
	]).then(function(answers){

		var newCard = answers.newCard.toLowerCase();

		if((newCard == "yes" || newCard == "y") && type == "basic"){
			basicGen();
		}
		else if((newCard == "yes" || newCard == "y") && type == "cloze"){
			clozeGen();
		}
		else{
			console.log("\nHere is a list of your flashcards: ");

			for (i = 0; i < arr.length; i++){

				if (type == "basic"){
					console.log("\n-------------------------\nQuestion: " + arr[i].front + "\nAnswer: " + arr[i].back);
				}
				else {
					console.log("\n-------------------------\nQuestion: " + arr[i].partial + "\nAnswer: " + arr[i].cloze
						+ "\nFull Question: " + arr[i].fullText);
				}

			}
		}
	})
} // END OF nextCard function


// ***** TEST CARDS *****

// var firstPresident = Basic(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front);

// // "George Washington"
// console.log(firstPresident.back);

// var firstPresidentCloze = Cloze(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze);

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);""
// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText); ""
