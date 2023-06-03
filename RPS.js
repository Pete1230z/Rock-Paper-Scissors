
//Begins function of actual RPS game

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


  }

 } 

 let rock = document.getElementById('btn').addEventListener('click', round());

 let scissors = document.getElementById('btn').addEventListener('click', round());

 let paper = document.getElementById('btn').addEventListener('click', round());


 //Play game until one user gets to 5

 //function game() {

	//if (Humanity >= 5) {
	//	alert('Game over, Humanity is saved!')
	//} else if (AI >= 5) {
		//alert('Game over, Humanity is doomed!')
	//}

  //} game();

//1. For now, remove the logic that plays exactly five rounds.
//2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
//3. Add a div for displaying results and change all of your console.logs into DOM methods.
//4. Display the running score, and announce a winner of the game once one player reaches 5 points.
//5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

