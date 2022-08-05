let choices = ["rock","paper","scissors"];
function getComputerChoice(){
    choice=Math.floor(Math.random()*3);
    return choices[choice]
};

function playRound(compChoice,playerChoice){
    if(compChoice == playerChoice){
        playerChoice=playerChoice.toLowerCase();
    return "Draw, with "+compChoice;
    }
    else if(compChoice == "rock" && playerChoice=="scissors"  || compChoice == "scissors" && playerChoice == "paper" ||compChoice == "paper" && playerChoice =="rock"){
        return "You lose, "+ compChoice+" beats "+playerChoice;
    }
    else{
        return "You win, "+playerChoice+" beats" + compChoice;
}
};

function playGame(){
    for(i=1;i<6;i++){
        result=playRound(getComputerChoice(),prompt("It's time to choose"));
        console.log(result);
    };
};