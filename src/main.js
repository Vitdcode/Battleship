import { Gameboard } from './game/gameboard-class';
import './style.css';

export const gameBoardPlayer1 = new Gameboard();

gameBoardPlayer1.placeShip('Cruiser', 2);

console.log(gameBoardPlayer1.board['A']);
console.log(gameBoardPlayer1.board['B']);
console.log(gameBoardPlayer1.board['C']);
