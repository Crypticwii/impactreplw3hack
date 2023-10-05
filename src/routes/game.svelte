<!-- App.svelte -->

<script>
  let squares = Array(9).fill(null);
  let currentPlayer = 'X';

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    squares[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  function getStatus() {
    const winner = calculateWinner(squares);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every(square => square !== null)) {
      return 'Draw!';
    } else {
      return `Next player: ${currentPlayer}`;
    }
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 5px;
  }

  .square {
    width: 100px;
    height: 100px;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div>
  <h1>Tic-Tac-Toe</h1>
  <p>{getStatus()}</p>
  <div class="board">
    {#each squares as value, index (index)}
      <div class="square" on:click={() => handleClick(index)}>{value}</div>
    {/each}
  </div>
</div>
