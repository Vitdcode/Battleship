import { Gameboard } from './game/gameboard-class';
import { Ship } from './game/ship-class';
import './style.css';

export const gameBoardPlayer1 = new Gameboard();
export const ships = {
  Carrier: new Ship().placeCarrier(gameBoardPlayer1),
};

gameBoardPlayer1.placeShip('Cruiser', 2);

/* console.log(gameBoardPlayer1.board['A']);
console.log(gameBoardPlayer1.board['B']); */
console.log(gameBoardPlayer1.board['D']);
console.log(gameBoardPlayer1.board['E']);
