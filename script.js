
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".container");

const Game = (() => {
    
    let playerOne = {
        name : prompt("insert name P1"),
        score: []
    }
    let playerTwo = {
        name : prompt("Insert name P2"),
        score : []
    }

    
    const combinations = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "b2", "c3"],
        ["a3", "b2", "c1"],
    ];
    
    let count = 0;
    
    cells.forEach(item => item.addEventListener("click", () =>{ 
        count ++;
        if(count % 2 == 0){
            item.textContent = "O";
            playerTwo.score.push(item.id);
        } else {
            item.textContent = "X";
            playerOne.score.push(item.id);
        }
        checkWinner();
    }, {once:true}))
    
    let winner = "";

    const checkWinner = () => {
        let checker = (firstArray, secondArray) => {
            return secondArray.every((element) => firstArray.includes(element));
        };
        for (item of combinations){
            if(checker(playerTwo.score, item)){
                winner = playerTwo.name;
                winScreen(winner);
            } else if(checker(playerOne.score, item)){
                winner = playerOne.name;
                winScreen(winner);
            } else if(playerOne.score.length + playerTwo.score.length == 9){
                winner = "tie";
                winScreen(winner);
                playerOne.score = 0;
                playerTwo.score = 0;
            }
        }
    }
    
    const winScreen = (winner) => {
        setTimeout(() => {
            board.setAttribute("style", "display: none");

            const winningScreen = document.createElement("div");
            winningScreen.classList.add("winning-screen");
            document.body.appendChild(winningScreen);

            const winMsg = document.createElement("p");
            winMsg.classList.add("win-msg");
            winningScreen.appendChild(winMsg);

            const reset = document.createElement("button");
            reset.classList.add("reset-btn");
            reset.textContent = "Play Again?";
            winningScreen.appendChild(reset);

            reset.addEventListener("click", () => {
                window.location.reload();
            })

            if(winner == playerOne.name || winner == playerTwo.name){
               winMsg.textContent =  " The winner is " + winner.toUpperCase();
            }else if(winner == "tie"){
               winMsg.textContent =  "oh no! it's a tie";
            }
        }, 500);
    }
})();

//make a board display add event listener to it



