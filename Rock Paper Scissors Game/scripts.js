let userScore    = 0;
let compScore    = 0;
let choices      = document.querySelectorAll(".choices");
let msgBox       = document.querySelector("#msg");
let userScoreEle = document.querySelector("#user-score");
let compScoreEle = document.querySelector("#comp-score");
let resetImgEle  = document.querySelector("#resetImage");
const choiceList = ['rock', 'paper', 'scissors'];

let imageHandler = (event) => {

    let userChoice = event.target.id;
    let random     = Math.floor(Math.random() * choiceList.length);
    let compChoice = choiceList[random];
    let userWin    = false;

    if(userChoice === compChoice) {
        msgBox.innerHTML   = "Game was draw. Play your move again!";

        msgBox.classList.remove("msgBoxWin");
        msgBox.classList.remove("msgBoxLose");
        msgBox.classList.add("msgBoxDraw");
    }
    else{
        if(userChoice === "rock"){
            compChoice === "scissors" ? userWin = true: userWin = false;              
        }
        else if(userChoice === "paper"){
            compChoice === "rock" ? userWin = true: userWin = false;                 
        }
        else if(userChoice === "scissors"){
            compChoice === "paper" ? userWin = true : userWin = false;                 
        }

        if(userWin === true){
            userScore              = userScore + 1;
            userScoreEle.innerHTML = userScore;
            msgBox.innerHTML       = `You win ${userChoice} beats ${compChoice}!`;

            msgBox.classList.remove("msgBoxDraw");
            msgBox.classList.remove("msgBoxLose");
            msgBox.classList.add("msgBoxWin");  
        }
        else{
            compScore              = compScore + 1;
            compScoreEle.innerHTML = compScore;
            msgBox.innerHTML       = `You lose ${compChoice} beats ${userChoice}!`;

            msgBox.classList.remove("msgBoxDraw");
            msgBox.classList.remove("msgBoxWin");
            msgBox.classList.add("msgBoxLose");             
        }
    }
}

for(let choiceVal of choices){
    choiceVal.addEventListener("click", imageHandler);
}

resetImgEle.addEventListener("click", () =>{

    userScore = 0;
    compScore = 0;
    userScoreEle.innerHTML = userScore;
    compScoreEle.innerHTML = compScore;
    msgBox.innerHTML       = "Play your move";

    msgBox.classList.remove("msgBoxWin");
    msgBox.classList.remove("msgBoxLose");
    msgBox.classList.add("msgBoxDraw");
})