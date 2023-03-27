
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".container");

let playerOne = {
    name : "",
    score: []
}
let playerTwo = {
    name : "",
    score : []
}

const Game = () => {
    
    board.setAttribute("style", "display: grid");
    
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
        console.log(playerOne.score, playerTwo.score);
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
            reset.classList.add("button");
            reset.textContent = "Play Again? (esc)";
            winningScreen.appendChild(reset);

            window.addEventListener("keydown", (e) => {
                if (e.keyCode == 27 ) window.location.reload();
            })

            reset.addEventListener("click", () => {
                window.location.reload();
                // playerOne.score = [];
                // playerTwo.score = [];
                // winningScreen.setAttribute("style", "display: none");
                // board.setAttribute("style", "display: grid");
                // for (item of cells) {
                //     item.textContent = "";
                // }
                // Game();
            })

            if(winner == playerOne.name || winner == playerTwo.name){
               winMsg.textContent =  " The winner is " + winner.toUpperCase();
            }else if(winner == "tie"){
               winMsg.textContent =  "oh no! it's a tie";
            }
        }, 500);
    }
};

const menu = (() => {
        board.setAttribute("style", "display: none");

        const menuScreen = document.createElement("div");
        menuScreen.classList.add("menu-screen");
        document.body.appendChild(menuScreen);

        const introMsg = document.createElement("p");
        introMsg.classList.add("intro-msg");
        introMsg.textContent = "Ready to play?"
        menuScreen.appendChild(introMsg);

        const pOneName = document.createElement("input");
        pOneName.setAttribute("type", "text");
        pOneName.placeholder = "Insert player one name";
        pOneName.classList.add("players-name");
        
        const pTwoName = document.createElement("input");
        pTwoName.setAttribute("type", "text");
        pTwoName.placeholder = "Insert player two name";
        pTwoName.classList.add("players-name");

        const infoEnter = document.createElement("p");
        infoEnter.classList.add("info-enter")
        infoEnter.textContent = "Press enter to start";

        const startButton = document.createElement("button");
        startButton.textContent = "Start";
        startButton.classList.add("button");
        startButton.addEventListener("click", () => {
            startGame();
        })

        window.addEventListener("keydown", (e) => {
            if(e.key == "Enter"){
                startGame();
            }
        }, {once:true})
        
        menuScreen.append(pOneName, pTwoName, infoEnter, startButton);
        
        const startGame = () => {
            if(pOneName.value == "") playerOne.name = "Player One";
            if(pTwoName.value == "") playerTwo.name = "Player Two";
            else {
                playerOne.name = pOneName.value;
                playerTwo.name = pTwoName.value;
            }
            Game();
            menuScreen.setAttribute("style", "display: none");
        }
})();




