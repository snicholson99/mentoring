const page = document.getElementById("page");

function computerMove (number){
  if (number <= 0.37){
  return "Rock";
  } else if (number > 0.37 && number <= 0.67){
  return "Paper";
  } else return "Scissors"; 
}

function points(player, computer){
  if (player === "Rock" && computer === "Paper"){
    return +1;
  } else if (player === "Rock" && computer === "Scissors"){
    return +1;
  } else if (player === "Paper" && computer === "Rock"){
    return +1;
  } else if (player === "Paper" && computer === "Scissors"){
    return -1;
  } else if (player === "Scissors" && computer === "Rock"){
    return -1;
  } else if (player === "Scissors" && computer === "Paper"){
    return +1;
  } else if (player === computer){
    return "Draw!";
  }}

function startGame() {
  const playerMove = prompt("Rock, paper or scissors?");
}