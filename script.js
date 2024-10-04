let userScore = 0;
let compScore = 0;

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const opt = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opt[randIdx];
};

const drawGame = () =>{
    msg.innerText ="Its a Draw, Play again!";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
      }
    }


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "scissor" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "rock" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});