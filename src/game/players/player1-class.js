import { createGameboardUi, printShipOnGameboard } from '../../ui/gameboard-ui';
import { Gameboard } from '../gameboard-class';
import { Ship } from '../ship-class';

export class Player1 {
  constructor(name = 'Player 1') {
    this.gameboard = new Gameboard();
    this.gameboardUi = createGameboardUi(this.gameboard.gameboard);
    this.name = name;
    this.ships = {
      carrier: this.createShip('carrier', 5),
      battleship: this.createShip('battleship', 4),
      cruiser: this.createShip('cruiser', 3),
      submarine: this.createShip('submarine', 3),
      destroyer: this.createShip('destroyer', 2),
    };
  }

  createShip(name, length) {
    const ship = new Ship(name, length);
    ship.createShipData(this.gameboard.gameboard);
    printShipOnGameboard(this.gameboard.gameboard, name);
    return ship;
  }
}
