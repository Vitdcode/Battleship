import {
  createGameboardUi,
  createShipsUnderBoard,
  printShipOnGameboard,
} from '../../ui/gameboard-ui';
import { Gameboard } from '../gameboard-class';
import { Ship } from '../ship-class';

export class Player {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.gameboard = new Gameboard();
    this.gameboardUi = createGameboardUi(this.gameboard.gameboard, this.id);
    this.playersTurn = false;
    this.ships = {
      carrier: this.createShip('carrier', 5),
      battleship: this.createShip('battleship', 4),
      cruiser: this.createShip('cruiser', 3),
      submarine: this.createShip('submarine', 3),
      destroyer: this.createShip('destroyer', 2),
    };
    this.shipTextUnderBoard = createShipsUnderBoard(
      this.ships,
      document.querySelector(`#board-and-trackingBoard-wrapper-${this.id}`),
      `ships-under-board-${this.id}`
    );
  }
  createShip(name, length) {
    const ship = new Ship(name, length);
    ship.createShipData(this.gameboard.gameboard);
    printShipOnGameboard(this.gameboard.gameboard, name, this.id);
    return ship;
  }
}
