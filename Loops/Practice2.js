let gameNumber  = 23;
let guessNumber = 0;
let valueGuess  = false;

do{
    guessNumber = prompt("Guess any number?"); // prompt always return value as string
    if (guessNumber == gameNumber){
        console.log("Your guess is correct!");
        valueGuess = true;
    }
} while(valueGuess == false);