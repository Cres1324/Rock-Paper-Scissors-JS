let choices = ["rock","paper","scissors"];
let score = [0,0];
function getComputerChoice(){
    choice=Math.floor(Math.random()*3);
    return choices[choice]
};

function playRound(compChoice,playerChoice){
    playerChoice=playerChoice.toLowerCase();
    console.log(playerChoice);
    if(compChoice == playerChoice){
    return "Draw, with "+compChoice;
    }
    else if(compChoice == "rock" && playerChoice=="scissors"  || compChoice == "scissors" && playerChoice == "paper" ||compChoice == "paper" && playerChoice =="rock"){
        score[1]++;
        return "You lose, "+ compChoice+" beats "+playerChoice;

    }
    else{
        score[0]++;
        return "You win, "+playerChoice+" beats " + compChoice;
}
};

document.addEventListener('click',playerChoosed)

function playerChoosed(e) {
    //document.querySelector(button.)
    e.stopPropagation();
    if(e.target.classList.contains('gameButton')){
        const result = playRound(getComputerChoice(),e.target.textContent);
        const resultText=document.querySelector('.result');
        resultText.textContent=result;
        const scoreText=document.querySelector('.score');
        if(score[1]>=5){
            resultText.textContent="Computer wins"
            score=[0,0]
        }
        if(score[0]>=5){
            resultText.textContent="You win"
            score=[0,0]
        }

        scoreText.textContent=`Player score:${score[0]}  Computer score:${score[1]}`;
    }  
    else {
        console.log('not today amigo')
    } 

}

//function playGame(){
 //   for(i=1;i<6;i++){
  //      result=playRound(getComputerChoice(),prompt("It's time to choose"));
  //      console.log(result);
   // };
///};*