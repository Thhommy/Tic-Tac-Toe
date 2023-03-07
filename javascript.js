const cell = document.querySelectorAll(".cell");


const GameBoard = (() => {
    let board = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
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

    return {board, printBoard};
})();


const Player = (name, sign) => {
    const changeCell = () => {
    cell.forEach(element => {
        element.addEventListener('click', () => {
            element.style.backgroundColor = 'red';
        })
    })};
    return {name, sign, changeCell};
};

const Gameplay = (() => {

})()


GameBoard.printBoard();

const playerOne = Player('first', "X");

playerOne.changeCell();


