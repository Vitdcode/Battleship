import { player1, player2 } from '../main';

export function initializeGame() {
  player1.playersTurn = true;
  playersTurnCheck();
}

export function playersTurnCheck() {
  const player1Boards = document.querySelector('#board-and-trackingBoard-wrapper-pl1');
  const player2Boards = document.querySelector('#board-and-trackingBoard-wrapper-pl2');
  if (player1.playersTurn) {
    playersTurnText(`${player1.name} turn`);
    player1Boards.style.display = 'grid';
    player2Boards.style.display = 'none';
  } else if (player2.playersTurn) {
    playersTurnText(`${player2.name} turn`);
    player2Boards.style.display = 'grid';
    player1Boards.style.display = 'none';
  }
}

function playersTurnText(text) {
  document.querySelector('#turn-text')?.remove();
  const appHeader = document.querySelector('#header');
  const whichTurnText = document.createElement('h2');
  whichTurnText.textContent = text;
  whichTurnText.id = 'turn-text';
  document.body.appendChild(whichTurnText);

  appHeader.after(whichTurnText);
}
