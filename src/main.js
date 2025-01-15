import { Gameboard } from './game/gameboard-class';
import { initializeGame } from './game/game-turn';
import { Player } from './game/players/player-class';
import { Ship } from './game/ship-class';
import './style.css';
import { createShipsUnderBoard } from './ui/gameboard-ui';

export const player1 = new Player('Coolguy', 'pl1');
export const player2 = new Player('Boss', 'pl2');
initializeGame();
console.log(player1);

createShipsUnderBoard(
  player2.id,
  player2.ships,
  document.querySelector(`#board-and-trackingBoard-wrapper-${player1.id}`),
  `ships-under-trackingboard-${player2.id}`
);

createShipsUnderBoard(
  player1.id,
  player1.ships,
  document.querySelector(`#board-and-trackingBoard-wrapper-${player2.id}`),
  `ships-under-trackingboard-${player1.id}`
);
