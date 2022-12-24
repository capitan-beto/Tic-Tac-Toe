
const cells = document.querySelectorAll(".cell");
const Gameboard = (() => {

    let playerOne = {
        name : "P1",
        score: []
    }
    let playerTwo = {
        name : "P2",
        score : []
    }

    let currentPlayer = playerOne;

    const combinations = [
        ["a1", "a2", "a3"],
        ["b2", "b2", "b2"],
        ["c3", "c3", "c3"],
        ["a1", "b1", "c1"],
        ["a2", "b2", "c2"],
        ["a3", "b3", "c3"],
        ["a1", "b2", "c3"],
        ["a3", "b2", "c1"],
    ];

    cells.forEach(item => item.addEventListener("click", (e) =>{ 
        if(currentPlayer == playerOne){
            item.textContent = "O";
            currentPlayer.score += item.id;
            currentPlayer = playerTwo;
        } else {
            item.textContent = "X";
            currentPlayer.score += item.id;
            currentPlayer = playerOne;
        }
        console.table(playerOne.score, playerTwo.score);
    }))

    // const checker = () => {
    //     if (playerOne.score =)
    // }
})();

// make the checker.

console.log(Gameboard);


