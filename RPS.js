
//Sets max rounds and sets up scores

let maxRounds = 5;
let scoreHumanity = 0;
let scoreAI = 0;

//Define functions

function getComputerChoice() { 

	const choices = ['rock', 'paper', 'scissors'];
	const randomChoice = Math.floor(Math.random() * choices.length);
	const decision = choices[randomChoice];
	return decision;
 }

 function scoreMessage() {
	return "The score is:\n AI: " + scoreAI + "\n Humanity: " + scoreHumanity;
 }

 function round(playerDecision) {

	let computerChoice = getComputerChoice();

    const playerWins =
	(playerDecision === 'paper' && computerChoice === 'rock') ||
	(playerDecision === 'rock' && computerChoice === 'scissors') ||
	(playerDecision === 'scissors' && computerChoice === 'paper');

	const computerWins =
	(computerChoice === 'paper' && playerDecision === 'rock') ||
	(computerChoice === 'rock' && playerDecision === 'scissors') ||
	(computerChoice === 'scissors' && playerDecision === 'paper');

	 if (playerWins) {
		scoreHumanity++
		alert ("Humanity Wins! " + scoreMessage());
		if (scoreHumanity === maxRounds) {
			endGame();
		}
	} else if (computerWins) {
		scoreAI++
		alert ("AI wins! " + scoreMessage());
		if (scoreAI === maxRounds) {
			endGame();
		}
	} else if (scoreAI === scoreHumanity) {
		alert ("It is a tie! " + scoreMessage());
	}
  } 

 function endGame() {

	let word = '';

	if (scoreHumanity >= maxRounds) {
		word = 'saved';
	} else if (scoreAI >= maxRounds) {
		word = 'doomed';
	}
	alert ("Game over, Humanity is " + word + "!")
  } 

//Click events

document.querySelector('.paper').addEventListener('click', function() {
	round('paper')
});

document.querySelector('.rock').addEventListener('click', function() {
	round('rock')
});

document.querySelector('.scissors').addEventListener('click', function() {
	round('scissors')
});