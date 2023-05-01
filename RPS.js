
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
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'scissors' && computerChoice === 'paper') {
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'paper' && computerChoice === 'rock') {
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'rock' && computerChoice === 'paper') {
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === 'scissors' && computerChoice === 'rock') {
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === 'paper' && computerChoice === 'scissors') {
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === computerChoice) {
		alert('It is a tie' + ' ' + 'the score is' + ' ' + 'AI' + ' ' + AI + 'Humanity' + ' ' + Humanity );
	} else if (playerDecision != 'rock' || 'paper' || 'scissors') {
		alert('Invalid, do not tempt me human!')
	} 

 } round();

 //Play game until one user gets to 5

 function game() {

	if (playerDecision === True) {
		Humanity += 1;
	} else if (computerChoice === True) {
		AI += 1;
	} if (playerDecision >= 5) {
		alert('Game over, Humanity is saved!')
	} else if (computerChoice >= 5) {
		alert('Game over, AI rules the world!')
	}


  } game();

