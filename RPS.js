
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
	
   while (Humanity < 5 && AI < 5) {

	let computerChoice = getComputerChoice();
    let playerDecision = prompt('Make your decision!', '').toLowerCase();

	if (playerDecision === 'rock' && computerChoice === 'scissors') {
		Humanity += 1;
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'scissors' && computerChoice === 'paper') {
		Humanity += 1;
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'paper' && computerChoice === 'rock') {
		Humanity += 1;
		alert('Humanity wins' + ' ' + 'your score is' + ' ' + Humanity);
	} else if (playerDecision === 'rock' && computerChoice === 'paper') {
		AI += 1;
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === 'scissors' && computerChoice === 'rock') {
		AI += 1;
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === 'paper' && computerChoice === 'scissors') {
		AI += 1;
		alert('AI wins' + ' ' + 'AIs score is' + ' ' + AI);
	} else if (playerDecision === computerChoice) {
		alert('It is a tie' + ' ' + 'the score is' + ' ' + 'AI' + ' ' + AI + ' ' + 'Humanity' + ' ' + Humanity );
	} else if (playerDecision != 'rock' || 'paper' || 'scissors') {
		alert('Invalid answer, do not tempt me human!')
	} 

	round();

  }

 } round();

 //Play game until one user gets to 5

 function game() {

	if (Humanity >= 5) {
		alert('Game over, Humanity is saved!')
	} else if (AI >= 5) {
		alert('Game over, Humanity is doomed!')
	}

  } game();

  

