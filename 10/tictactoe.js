const board = document.getElementById('board');
  const status = document.getElementById('status');
  const resetBtn = document.getElementById('resetBtn');
  const cells = Array.from(document.querySelectorAll('.cell'));
  
  let currentPlayer = 'X';
  let gameState = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedIndex] !== "" || !gameActive) {
      return;
    }

    updateCell(clickedCell, clickedIndex);
    checkResult();
  }

  function updateCell(cell, index) {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
  }

  function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }

  function checkResult() {
    let roundWon = false;
    for(let i = 0; i < winningConditions.length; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if(a === '' || b === '' || c === '') {
        continue;
      }
      if(a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if(roundWon) {
      status.textContent = `Player ${currentPlayer} wins! 🎉`;
      gameActive = false;
      return;
    }

    if(!gameState.includes("")) {
      status.textContent = "It's a draw!";
      gameActive = false;
      return;
    }

    changePlayer();
  }

  function resetGame() {
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    status.textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
    cells.forEach(cell => cell.textContent = "");
  }

  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetBtn.addEventListener('click', resetGame);
