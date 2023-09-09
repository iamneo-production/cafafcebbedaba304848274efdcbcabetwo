let currentPlayer = 'x';
let board = ['', '', '', '', '', '', '', '', ''];
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        cell.classList.add(currentPlayer);
        cell.innerText = currentPlayer.toUpperCase();
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        checkWinner();
    }
}

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('message').innerText = `${board[a].toUpperCase()} wins!`;
            return true;
        }
    }
    if (board.every(cell => cell !== '')) {
        document.getElementById('message').innerText = "It's a draw!";
        return true;
    }
    return false;
}
