let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const ticTacToe = (element, index) => {
    if (cells[index] === '') {
        cells[index] = currentPlayer;
        element.textContent = currentPlayer;
        element.disabled = true;

        if (checkWin(currentPlayer)) {
            result.textContent = `Player ${currentPlayer} wins!`;
            disableAllButtons();
        } else if (cells.every(cell => cell !== '')) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
};

const checkWin = (player) => {
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] === player && cells[b] === player && cells[c] === player) {
            return true;
        }
    }
    return false;
};

const disableAllButtons = () => {
    btns.forEach(btn => btn.disabled = true);
};

const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = "Player X's Turn";
    btns.forEach(btn => {
        btn.textContent = '';
        btn.disabled = false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
