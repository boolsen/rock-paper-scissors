function getComputerChoice() {
    computerChoice = parseInt(Math.random() * 3);
    return computerChoice;
}

function testComputerChoice() {
    let arr = [0,0,0,0]
    for (let i = 0; i< 10000; i++) {
        value = getComputerChoice();

        if (value === "Rock")
            arr[0]++;
        else if (value === "Paper") {
            arr[1]++;
        }
        else if (value === "Scissors") {
            arr[2]++;
        }
        else {
            arr[3]++;
        }
    }

    console.log("Rock: " + arr[0] + " | " + "Paper: " + arr[1] + " | " + "Scissors: " + arr[2] + " | " + "Undef: " + arr[3] + " | ");
}

function getHumanChoice() {
    let humanchoice;
    do {
        humanchoice = prompt("Choose Rock, Paper or scissors: ").toUpperCase();
    } while (humanchoice !== "ROCK" && humanchoice !== "PAPER" && humanchoice !== "SCISSORS")

    return humanchoice;    
}

function getResult(humanChoice, computerChoice) {
    let roundScore = (humanChoice - computerChoice + 3) % 3;

    if (roundScore === 1) {
        return 1;
    }
    else if ( roundScore === 2) {
        return -1;
    }
    else {
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let msgText = "";    
    
        if (computerChoice === humanChoice) {
            console.log("Draw!");
            return;
        }
    
        let humanWin = getResult(humanChoice,computerChoice);
    
        if (humanWin) {
            msgText = `You win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            
        }
        else {
            msgText = `You loose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
        console.log(msgText);
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    let winnerText = ""

    if (humanScore > computerScore) {
        winnerText = "You win!";
    }
    else if (humanScore < computerScore) {
        winnerText = "Computer win!";
    }
    else {
        winnerText = "It's a draw!";
    }

    let finalScoreText = `Human: ${humanScore} points, Computer: ${computerScore} points. ${winnerText}`;
    console.log(finalScoreText);

    return;

}  