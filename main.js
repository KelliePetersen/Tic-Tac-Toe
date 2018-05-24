let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const container = document.getElementById('container');
const grid = document.getElementsByClassName('square');
const startGameButton = document.getElementById('start-game');
const endGame = document.getElementById('end-game');

const winningChoices = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

let playerOne = 'X';
let playerTwo = 'O';
let computerPlayer = 'O';

(function init() {
  startGame();
})();

startGameButton.addEventListener('click', startGame);
container.addEventListener('click', turnClick, false);


function startGame() {
  endGame.classList.add('hidden');
  gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let item of grid) {
    item.innerText = "";
    item.classList.remove('winningCells');
    item.classList.remove('winningCellsComputer');
  }
}

function turnClick(square) {
  turn(square.target.id, playerOne);
}

// FIX: You may need to change gameBoard[squareId] to -1 or +1
function turn(squareId, player) {
  gameBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  // target.innerText = player;
  let gameWon = checkWin(gameBoard, player);
  if (gameWon) {
    gameOver(gameWon);
  }
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
  let gameWon = null;
  for (let [index, win] of winningChoices.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of winningChoices[gameWon.index]) {
    if (gameWon.player == playerOne) {
      document.getElementById(index).classList.add('winningCells');
    } else {
      document.getElementById(index).classList.add('winningCellsComputer');
    }
  }
  container.removeEventListener('click', turnClick, false);
}