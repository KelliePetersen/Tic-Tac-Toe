let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

startGameButton.addEventListener('click', function() {
  console.log('clicked!');
});

function startGame() {
  endGame.classList.add('hidden');
  gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let item of grid) {
    item.innerText = "";
    item.classList.remove('winningCells');
  }
}