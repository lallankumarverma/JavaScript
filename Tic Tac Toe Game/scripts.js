let btn = document.querySelectorAll(".btn");
let resetBtn      = document.querySelector("#reset-btn");
let gameResult    = document.querySelector("#game-result");
let turnX         = true;
const winPatterns = [
                        [0, 1, 2], 
                        [0, 3, 6],
                        [0, 4, 8],
                        [1, 4, 7],
                        [2, 4, 6],
                        [2, 5, 8],
                        [3, 4, 5],
                        [6, 7, 8]
                    ]; 

resetBtn.addEventListener("click", () =>{
    
    gameResult.style.color = "green"; 
    gameResult.innerHTML   = "Game Started";
    turnX                  = true;

    for(let btnVal of btn){
        btnVal.innerHTML   = "";
        btnVal.disabled    = false;
        btnVal.style.color = "brown";
    }
} );   


let btnHandler = (event) =>{

    let currBtn = event.target;
    
    if(turnX === true){
        currBtn.innerHTML   = "X";
        currBtn.style.color = "red";
        turnX = false;
    }
    else{
        currBtn.innerHTML = "O";
        currBtn.style.color = "blue";
        turnX = true;
    }

    currBtn.disabled = true;
    
    let win = checkWinPatterns();

    if(win !== ""){

        gameResult.style.color = "red"; 
        gameResult.innerHTML   = `Player ${win} win. Congratulation!!!!!!`;
        
        for(let btnVal of btn){
            btnVal.disabled = true;
        }       
    }   
}

for(let btnVal of btn){
    btnVal.addEventListener("click", btnHandler);
}

function checkWinPatterns(){

    let fillCount = 0;

    for(winIdx in winPatterns){
        
        let win1 = winPatterns[winIdx][0];
        let win2 = winPatterns[winIdx][1];
        let win3 = winPatterns[winIdx][2];
        
        if(btn[win1].innerHTML !== "" && btn[win2].innerHTML !== "" && btn[win3].innerHTML !== "")
        {
            if(btn[win1].innerHTML === btn[win2].innerHTML && btn[win2].innerHTML === btn[win3].innerHTML){
                
                btn[win1].style.color = "white";
                btn[win2].style.color = "white";
                btn[win3].style.color = "white";
                return btn[win1].innerHTML;
            }
        }
    }   

    for(let btnVal of btn){
        
        if(btnVal.innerHTML !== ""){
            fillCount++;
        }
    }
    
    if(fillCount === btn.length){
        gameResult.style.color = "red"; 
        gameResult.innerHTML   = "Game Draw!!!!!!!!!!!!";
    }

    return "";
}
