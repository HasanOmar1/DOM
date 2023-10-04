const letterToGuess = document.querySelector(".letter-to-guess")
const rightOrWrong = document.querySelector(".wrong-right-message")
const playAgainWindow = document.querySelector(".play-again-container")
const guesses = document.querySelector(".guesses")
const resetButton = document.querySelector("button");

const ALL_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
let letterToFind = ""
let isGameWon = false;
let alreadyPickedLetters = [];

const getRandomChar = () => {
    const charsLength = ALL_CHARACTERS.length
    return ALL_CHARACTERS.charAt(Math.floor(Math.random() * charsLength));
}

const winGame = () => {
    rightOrWrong.textContent = "Right Letter";
    rightOrWrong.classList.remove("wrong")
    rightOrWrong.classList.add("right");
    playAgainWindow.style.display = "flex";
    letterToGuess.textContent = letterToFind;
    letterToGuess.classList.add("guess-right-letter");
    isGameWon = true;
}

const wrongGuess = (key) => {
    const letters = guesses.textContent;
    rightOrWrong.classList.remove("right");
    rightOrWrong.classList.add("wrong");
    if(alreadyPickedLetters.includes(key)) {
        rightOrWrong.textContent = ` Nope, Already Guessed ${key}`;
        return;
    }
    rightOrWrong.textContent = "Nope, Wrong letter";
    alreadyPickedLetters.push(key);
    if(letters === "") {
        guesses.textContent = `${key}`
        return;
    }
    guesses.textContent = `${letters}, ${key}`;
}


const resetGame = () => {
    letterToFind = getRandomChar();
    rightOrWrong.classList.remove("wrong")
    rightOrWrong.classList.remove("right")
    playAgainWindow.style.display = "none";
    letterToGuess.classList.remove("guess-right-letter");
    letterToGuess.textContent = "?"
    rightOrWrong.textContent = "Guess a letter";
    guesses.textContent = "";
    isGameWon = false;
    alreadyPickedLetters = [];
}

letterToFind = getRandomChar();

resetButton.addEventListener("click", ()=>{
    resetGame();
})


window.addEventListener("keyup",(event)=>{
    const key = event.key.toLocaleLowerCase();
    if(isGameWon){
        return;
    }
    if(key === letterToFind){
        winGame();
    }else if(ALL_CHARACTERS.includes(key)){
        wrongGuess(key);
    }
})

console.log(letterToFind);