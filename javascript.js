const cell = document.querySelectorAll(".cell");


const GameBoard = (() => {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    const printBoard = () => { 
        i = 0;
         cell.forEach(element => {
            if (i <= 2){
            element.textContent = board[0][i];
            }else if (i > 2 && i <= 5) {
                element.textContent = board[1][i - 3];
            }else if ( i > 5) {
                element.textContent = board[2][i - 6];
            }
            i += 1;
        }); 
    };

    const changeCell = () => {
        cell.forEach(element => {

            element.addEventListener('click', function(e) {
                    if (e.target.innerHTML === ''){
                        if (e.target.classList.contains('cell1')){
                            GameBoard.board[0][0] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell2')){
                            GameBoard.board[0][1] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell3')){
                            GameBoard.board[0][2] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell4')){
                            GameBoard.board[1][0] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell5')){
                            GameBoard.board[1][1] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell6')){
                            GameBoard.board[1][2] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell7')){
                            GameBoard.board[2][0] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell8')){
                            GameBoard.board[2][1] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }else if (e.target.classList.contains('cell9')){
                            GameBoard.board[2][2] = Gameplay.playerPick();
                            console.log(GameBoard.board)
                            GameBoard.printBoard();
                        }
                }
              });
        });
    }; 

    return {board, printBoard, changeCell};
})();


const Player = (name, sign, turn) => {
   
    return {name, sign, turn};
};

const playerOne = Player('first', "X", true);
const playerTwo = Player('second', 'O', true);


const Gameplay = (() => {
    const playerPick = () => {
        if(playerOne.turn){
            return playerOne.sign;
        }else if(playerTwo.turn) {
            return playerTwo.sign;
        }
    }

    const gameFlow = () => {
        cell.forEach(element => {
            element.addEventListener('click', () => {
                playerOne.turn = !playerOne.turn;
            })
        });
    }

   return {playerPick, gameFlow}
})();


Gameplay.gameFlow()
GameBoard.printBoard()
GameBoard.changeCell()
