const allCards = ['12','11','10','9','8','7','6','5','4','3','2','1'];
let cardsArray = [], cards = [], firstCard = null, secondCard = null;
let lockBoard = false, moves = 0, matches = 0, timerInt;
let countdown = 60, currentPairs = 8;
let sessionLeaderboard = [];

const board = document.getElementById('gameBoard'),
      movesEl = document.getElementById('moves'),
      timerEl = document.getElementById('timer'),
      leaderboard = document.getElementById('leaderboard');

function setDifficulty(level) {
  if (level === 'easy') {
    currentPairs = 4;
    countdown = 30;
  } else if (level === 'medium') {
    currentPairs = 6;
    countdown = 40;
  } else {
    currentPairs = 8;
    countdown = 60;
  }
  restartGame();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function startTimer() {
  timerEl.textContent = countdown;
  timerInt = setInterval(() => {
    countdown--;
    timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timerInt);
      endGame(false);
    }
  }, 1000);
}

function createBoard() {
  cardsArray = allCards.slice(0, currentPairs);
  cards = [...cardsArray, ...cardsArray];
  shuffle(cards);
  board.innerHTML = '';
  cards.forEach(sym => {
    const c = document.createElement('div');
    c.className = 'card';
    c.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${sym}</div>
      </div>`;
    c.onclick = flipCard; 
    board.appendChild(c);
  });
}

function flipCard() {
  if (lockBoard || this.classList.contains('flipped')) return;
  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    if (moves === 0) startTimer();
    return;
  }

  secondCard = this;
  lockBoard = true;
  moves++;
  animateScore();

  const a = firstCard.querySelector('.card-back').textContent;
  const b = secondCard.querySelector('.card-back').textContent;

  if (a === b) {
    setTimeout(() => {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetFlips(); 
      matches++;
      if (matches === cardsArray.length) {
        clearInterval(timerInt);
        endGame(true);
      }
    }, 500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetFlips();
    }, 800);
  }
}

function resetFlips() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function endGame(won) {
  document.getElementById('finalStats').textContent = won
    ? `Moves: ${moves}, Time Left: ${countdown}s`
    : "Time's up! Try again!";
  document.getElementById('stars').textContent = won
    ? '*'.repeat(moves <= currentPairs * 2 ? 5 : moves <= currentPairs * 3 ? 4 : 3)
    : 'X';

  if (won) updateSessionLeaderboard(moves, countdown);
  displayLeaderboard();
  document.getElementById('result').classList.remove('hidden');
}

function restartGame() {
  [moves, matches] = [0, 0];
  clearInterval(timerInt);
  timerEl.textContent = countdown;
  movesEl.textContent = 0;
  document.getElementById('result').classList.add('hidden');
  lockBoard = false;
  [firstCard, secondCard] = [null, null];
  createBoard();
}

function animateScore() {
  movesEl.textContent = moves;
  movesEl.style.transform = 'scale(1.4)';
  setTimeout(() => movesEl.style.transform = 'scale(1)', 300);
}

function updateSessionLeaderboard(m, t) {
  sessionLeaderboard.push({ moves: m, timeLeft: t });
  sessionLeaderboard.sort((a, b) => a.moves - b.moves || b.timeLeft - a.timeLeft);
  sessionLeaderboard = sessionLeaderboard.slice(0, 5); // Keep top 5
}

function displayLeaderboard() {
  let list = sessionLeaderboard.map(e => `<li>${e.moves} Moves - ${e.timeLeft}s Left</li>`);
  leaderboard.innerHTML = list.join('');
}

createBoard();
