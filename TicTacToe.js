let game = {
        xTurn: true,
        xState: [],
        oState:[],
        winStates: [
                // rows
                ['0','1','2'],
                ['3','4','5'],
                ['6','7','8'],
                // columns
                ['0','3','6'],
                ['1','4','7'],
                ['2','5','8'],
                // diagonals
                ['0','4','8'],
                ['2','4','6']
        ]
}

document.addEventListener('click', event => {
        let target = event.target;
        let isCell = target.classList.contains('grid-cell');
        let isDisabled = target.classList.contains('disabled');

        if (isCell && !isDisabled) {
                let cellValue = target.dataset.value;

game.xTurn === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)

target.classList.add('disabled')
target.classList.add(game.xTurn ? 'x' : 'o')

game.xTurn = !game.xTurn
        }
})

if (!document.querySelectorAll('grid-cell:not(.disabled)').length) {
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = 'Draw!'
}

game.winningStates.forEach(winningState => {
        let xWins = winningState.every(state => game.xState.includes(state))
        let oWins = winningState.every(state => game.oState.includes(state))

        if (xWins || oWins) {
                document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
                document.querySelector('.game-over').classList.add('visible')
                document.querySelector('.game-over-text').textContent = xWins
                ? 'X Wins!'
                : 'O Wins!'
        }
})

document.querySelector('.restart').addEventListener('click', () => {
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.grid-cell').forEach(cell => {
                cell.classList.remove('disabled', 'x', 'o')
        })
        game.xTurn = true
        game.xState = []
        game.oState = []
})
