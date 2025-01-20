function getComputerChoice() {
    let computerChoice;
    choiceArray = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = choiceArray[parseInt(Math.random() * 3)];
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
    let humanWin = false;
    let scoreDict = {"ROCK": 0,"SCISSORS":1,"PAPER":2}

    let computerNum = scoreDict[computerChoice];
    let humanNum = scoreDict[humanChoice];

    let roundScore = (humanNum - computerNum + 3) % 3;

    if (roundScore === 2) {
        humanWin = true;
    }

    return humanWin;
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