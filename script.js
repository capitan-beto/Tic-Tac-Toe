
const cells = document.querySelectorAll(".cell");
const board = document.querySelector(".container")
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
            }
        }
    }
    
    const winScreen = (winner) => {
        alert("winner is " + winner);
    }

})();


//steps remaining: 
//crete tie msg display


