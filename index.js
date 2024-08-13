const GetComputerChoise = () => {
 let choisemaker = Math.random () * (4-1) + 1;
 let choisecorrect = Math.floor (choisemaker);
 let chosie = ""
 if (choisecorrect === 1) {
   choise = "rock"
 }
 else if(choisecorrect === 2) {
   choise = "paper"
 }
 else{
    choise = "scissors"
 }
 return choise
}

let result = ""

const GetHumanChoise = () => {
 let humanchoise = prompt ("chose rock-paper-scissors")
 let humanchoisecorrect = humanchoise.toLowerCase()
  return humanchoisecorrect
}

let humanscore = 0;

let botscore = 0;



function playround() {
 
  let botmove= (GetComputerChoise())

  let humanmove = (GetHumanChoise())

  if (humanmove === botmove) {
   let result = "it's a tie!"
  }
  else{
   switch(humanmove){
     case "rock":
       result = (botmove === "scissors")? "you win"  : "you lose, paper beats rock!" ;
       break;
     case "paper":
       result = (botmove === "rock") ? "you win" : "you lose, scissors beats paper!" ;
       break;
     case "scissors" :
       result = (botmove === "paper") ? "you win" : "you lose, rock beats scissors!" ;
       break;
   }
  }
  
  console.log (result);

  if (result === "it's a tie") {

    console.log (`humanpoints = ${humanscore} , botpoints = ${botscore}`)}
  else{ 
   switch(result){
    case "you win" :
      humanscore ++
      console.log(`humanpoints = ${humanscore} , botpoints = ${botscore}`);
      break;
    case "you lose, paper beats rock!" :
      botscore ++
      console.log(`humanpoints = ${humanscore} , botpoints = ${botscore}`);
      break;
    case "you lose, scissors beats paper!":
      botscore ++
      console.log(`humanpoints = ${humanscore} , botpoints = ${botscore}`) ;
      break; 0
    case "you lose, rock beats scissors!" :  
     botscore ++
      console.log(`humanpoints = ${humanscore} , botpoints = ${botscore}`) ;
      break;
  }             
 }
}

playround()
playround()
playround()
playround()
playround()
