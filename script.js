const choices = ["Rock", "Paper", "Scissors"]
var playerPoints = 0
var computerPoints = 0

function randomComputerChoice() {
    let computerChoice = Math.floor(Math.random() * choices.length)
    let teste = choices[computerChoice]
    return teste
}

function scoreboard() {
    document.getElementById('userPoints').innerHTML = playerPoints
    document.getElementById('PCPoints').innerHTML = computerPoints
}

function playGame() {
    var userChoice = document.getElementById('button').value
    var paragraph = document.getElementById('message')

    switch(randomComputerChoice()) {
        case "Rock":
           
            if (userChoice == "rock") {
                paragraph.textContent += "\nTie!"
            } else if (userChoice == "paper") {
                paragraph.textContent += "\nYou won!"
                playerPoints += 1
            } else if (userChoice == "scissors") {
                paragraph.textContent += "\nYou lost!"
                computerPoints += 1
            }
            break;

        case "Paper":
            if (userChoice == "paper") {
                paragraph.textContent += "\nIt's a tie!"
            } else if (userChoice == "scissors") {
                paragraph.textContent += "\nYou won!"
                playerPoints += 1
            } else if (userChoice == "rock") {
                paragraph.textContent += "\nYou lost!"
                computerPoints += 1
            }
            break;

        case "Scissors":
            if (userChoice == "scissors") {
                paragraph.textContent += "\nIt's a tie!"
            } else if (userChoice == "rock") {
                paragraph.textContent += "\nYou won!"
                playerPoints += 1
            } else if (userChoice == "paper") {
                paragraph.textContent += "\nYou lost!"
                computerPoints += 1
            }
            break;
    }

    scoreboard()

}

