

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

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    switch (`${humanChoice}-${computerChoice}`) {
        case "1-1":
        case "2-2":
        case "3-3":
            console.log("Tie! Both of you selected the same weapon");
            break;
        case "1-2":
            console.log("Rock loses to Paper, Computer wins!");
            computerScore++;
            break;
        case "1-3":
            console.log("Rock wins against Scissors, Human wins!");
            humanScore++;
            break;
        case "2-1":
            console.log("Paper wins against Rock, Human wins!");
            humanScore++;
            break;
        case "2-3":
            console.log("Paper loses to Scissors, Computer wins!");
            computerScore++;
            break;
        case "3-1":
            console.log("Scissors lose to Rock, Computer wins!");
            computerScore++;
            break;
        case "3-2":
            console.log("Scissors win against Paper, Human wins!");
            humanScore++;
            break;
        default:
            console.log("Invalid choice");
    }
    
    console.log("Human Score: " + humanScore);
    console.log( "Computer Score: "+ computerScore)
};

for (i = 0; i < 5; i++){
playRound();
};
