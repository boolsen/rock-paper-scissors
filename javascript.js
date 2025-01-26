let playerChoice;
let computerChoice;
let score;
let imagePathArray = ["/img/rock.jpg","/img/paper.jpg","/img/scissors.jpg","/img/questionmark.png"];

let scoreTextHuman;
let scoreTextComputer;
let winnerText;
let computerImage;
let humanScore = 0;
let computerScore = 0;

const playRound = function (element) {
    resetBorders();
    playerChoice = parseInt(element.value);
    let child = element.firstElementChild;
    let selectedBorder = "10px solid var(--darkBG)";
    changeBorder(child, selectedBorder);

    computerChoice = getComputerChoice();
    updateComputerImg(computerChoice);

    changeBorder(computerImage, selectedBorder);

    let roundScore = getResult(playerChoice, computerChoice);
    updateScore(roundScore);
    updateWinnerText(roundScore);
    if (humanScore >= 5 || computerScore >= 5) {
        let gameWinner;
        if (humanScore > computerScore) {
            gameWinner = 'Human'
        }
        else {
            gameWinner = 'Computer'
        }
        alert(`The first to 5 wins is: ${gameWinner}!!`);
    }
}

const resetBorders = function () {
    let notSelected = "10px solid var(--notSelected)";
    for (element of playerChoices) {
        changeBorder(element, notSelected);
    }
}

const changeBorder = function (element, newValue) {
    element.style.border = newValue;
}

const updateComputerImg = function (computerChoice) {
    let computerImgPath = imagePathArray[computerChoice];
    computerImage.src = computerImgPath;    
}

const updateScore = function (humanWin) {
    let winnerScoreText = null;
    if (humanWin > 0) {
        winnerScoreText = scoreTextHuman;
        humanScore++;
        winnerScore = humanScore;
    }
    else if (humanWin < 0) {
        winnerScoreText = scoreTextComputer;      
        computerScore++;
        winnerScore = computerScore;
    }
    else {
        winnerScoreText = null;
    }

    if (winnerScoreText) {
        winnerScoreText.textContent = winnerScore;
    }
}

const updateWinnerText = function (score) {
    let winner;
    if (score === 1) {
        winner = 'Human wins!!!';
    }
    else if (score === -1) {
        winner = 'Computer wins!'
    }
    else {
        winner = 'Draw...'
    }
    let winnerStr = `Round result: ${winner}!!`

    winnerText.textContent = winnerStr;
}

const restartGame = function () {
    scoreTextHuman.textContent = 0;
    scoreTextComputer.textContent = 0;
    let borderStyle = "10px solid var(--notSelected)";
    resetBorders();
}

document.addEventListener("DOMContentLoaded", () => {
    scoreTextHuman = document.querySelector(".player-score-text");
    scoreTextComputer = document.querySelector(".computer-score-text");
    winnerText = document.querySelector(".winner-text");
    computerImage = document.querySelector("#computer-choice-image");
    playerChoices = document.querySelectorAll(".player-choices,#computer-choice-image");
});