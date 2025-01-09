

function getComputerChoice(){
    choice = Math.ceil(Math.random() * 3);
    return choice
};


function getHumanChoice(){
    let choice = 0;
    while(choice != 1 && choice != 3 && choice != 2){
    choice = prompt("Enter your choice (1-Rock, 2-Paper, or 3-Scissor):");
        if ("rock" === choice.toLowerCase()) {
            choice = 1;
        } else if ("paper" === choice.toLowerCase()) {
            choice = 2;
        } else if ("scissor" === choice.toLowerCase()) {
            choice = 3;
        };
    
     }
    return choice;
    
};


let humanScore = 0;
let computerScore = 0;

function playRound(choice){
    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    switch (`${humanChoice}-${computerChoice}`) {
        case "1-1":
        case "2-2":
        case "3-3":
            result.textContent = "Tie! Both of you selected the same weapon";
            break;
        case "1-2":
            result.textContent = "Rock loses to Paper, Computer wins!";
            computerScore++;
            break;
        case "1-3":
            result.textContent ="Rock wins against Scissors, Human wins!";
            humanScore++;
            break;
        case "2-1":
            result.textContent = "Paper wins against Rock, Human wins!";
            humanScore++;
            break;
        case "2-3":
            result.textContent ="Paper loses to Scissors, Computer wins!";
            computerScore++;
            break;
        case "3-1":
            result.textContent ="Scissors lose to Rock, Computer wins!";
            computerScore++;
            break;
        case "3-2":
            result.textContent ="Scissors win against Paper, Human wins!";
            humanScore++;
            break;
        default:
            console.log("Invalid choice");
    }
    
    pHuman.textContent =("Human Score: " + humanScore);
    pComputer.textContent =( "Computer Score: "+ computerScore)

    if (humanScore === 5) {
        pHuman.innerHTML = ("Human Score: " + humanScore + " <br>The Winnner is the human");
    } else if (computerScore === 5) {
        pHuman.innerHTML = ("Human Score: " + humanScore + " <br>The Winnner is the computer");
    }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const resultText = document.querySelector(".result");
const result = document.createElement("p");
const pComputer = document.createElement("p");
const pHuman = document.createElement("p");

resultText.appendChild(result);
resultText.appendChild(pComputer);
resultText.appendChild(pHuman);

rock.addEventListener("click", () => {playRound(1);}  );
paper.addEventListener("click",() => {playRound(2);} );
scissor.addEventListener("click",() =>{playRound(3); } );



