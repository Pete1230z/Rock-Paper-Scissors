
let Humanity = 0;
let AI = 0;

//Create function to generate random computer choice 

function getComputerChoice() { 

	const choices = ['rock', 'paper', 'scissors'];
	const randomChoice = Math.floor(Math.random() * choices.length);
	const decision = choices[randomChoice];
	return decision;

 } getComputerChoice();

 //play a round of game


 function round() {

	let computerChoice = getComputerChoice();
    let playerDecision = prompt('Make your decision!', '').toLowerCase();


	if (playerDecision === 'rock' && computerChoice === 'scissors') {
		Humanity += 1;
		alert('Humanity Wins');
	} else if (playerDecision === 'scissors' && computerChoice === 'paper') {
		Humanity += 1;
		alert('Humanity Wins');
	} else if (playerDecision === 'paper' && computerChoice === 'rock') {
		Humanity += 1;
		alert('Humanity Wins');
	} else if (playerDecision === 'rock' && computerChoice === 'paper') {
		AI += 1;
		alert('AI Wins');
	} else if (playerDecision === 'scissors' && computerChoice === 'rock') {
		AI += 1;
		alert('AI Wins');
	} else if (playerDecision === 'paper' && computerChoice === 'scissors') {
		AI += 1;
		alert('AI Wins');
	} else if (playerDecision === computerChoice) {
		alert('It is a tie');
	} else if (playerDecision != 'rock' || 'paper' || 'scissors') {
		alert('Invalid, do not tempt me human!')
	}

 } round();

 function game() {
	if (Humanity >= 5) {
		alert('Game over, humanity is saved!');
	} else if (AI >= 5) {
		alert('Game over, humanity is doomed');
	}
  }

