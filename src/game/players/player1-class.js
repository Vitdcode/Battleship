import {
  createGameboardUi,
  GameboardUi,
  printShipOnGameboard,
  printShipsOnGameboard,
} from '../../ui/gameboard-ui';
import { Gameboard } from '../gameboard-class';
import { Ship } from '../ship-class';

export class Player1 {
  constructor(name = 'Player 1') {
    this.gameboard = new Gameboard();
    this.GameboardUi = createGameboardUi(this.gameboard.gameboard);
    this.name = name;
    this.ships = {
      Carrier: this.placeCarrier(),
      Battleship: this.placeBattleship(),
    };
  }

  placeBattleship() {
    const battleship = new Ship(4);
    battleship.placeBattleship(this.gameboard.gameboard);
    printShipOnGameboard(this.gameboard.gameboard, 'battleship');
    return battleship;
  }

  placeCarrier() {
    const carrier = new Ship(5);
    carrier.placeCarrier(this.gameboard.gameboard);
    printShipOnGameboard(this.gameboard.gameboard, 'carrier');
    return carrier;
  }

  /*     createBoardUi() {
      createGameboardUi(this.gameboard);
  } */
}
