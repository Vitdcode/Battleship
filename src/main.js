import { Gameboard } from './game/gameboard-class';
import { initializeGame } from './game/game-turn';
import { Player } from './game/players/player1-class';
import { Ship } from './game/ship-class';
import './style.css';

export const player1 = new Player('Coolguy', 'pl1');
export const player2 = new Player('Boss', 'pl2');
initializeGame();
console.log(player1);
