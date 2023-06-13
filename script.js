const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const messageText = document.querySelector('.message p');
const resetButton = document.querySelector('.reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
	cell.addEventListener('click', () => {
		if (cell.textContent === '') {
			cell.textContent = currentPlayer;
			board[cell.dataset.id] = currentPlayer;
			checkWin();
			switchPlayer();
		}
	});
});

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
	if (
		(board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
		(board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
		(board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
		(board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
		(board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
		(board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
		(board[0] === currentPlayer &&board[4] === currentPlayer && board[8] === currentPlayer) ||
		(board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)
	) {
		gameOver(`${currentPlayer} wins!`);
	} else if (!board.includes('')) {
		gameOver('Tie game!');
	}
}

function gameOver(msg) {
	messageText.textContent = msg;
	message.style.display = 'flex';
}

resetButton.addEventListener('click', () => {
	cells.forEach(cell => {
		cell.textContent = '';
	});
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	message.style.display = 'none';
});