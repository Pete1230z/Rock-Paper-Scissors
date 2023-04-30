//Create function to generate computer program 

function getComputerChoice() { 

	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomChoice = Math.floor(Math.random() * choices.length);
	const decision = choices[randomChoice];
	return decision;

 } getComputerChoice();

 //Create a way for the user to input their answer

 function playerDecision() { 
	const userInput = prompt('Make your decision');
	return userInput;

 } playerDecision();

 //Create a comparison about which RPS beats what

 //Create a way to say you won or you lost

