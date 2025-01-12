import { Gameboard } from './gameboard-class';

export class Ship extends Gameboard {
  constructor(length) {
    super();
    this.length = length;
    this.hit = 0;
    this.isSunk = false;
  }

  hit() {
    return (this.hit += 1);
  }

  isSunk() {
    if (this.hit === this.length) {
      return (this.isSunk = true);
    }
  }

  placeCarrier(playerBoard) {
    super.placeShipOnGameboard(playerBoard, 'carrier', super.randomizeOrientation());
  }

  placeBattleship(playerBoard) {
    super.placeShipOnGameboard(playerBoard, 'battleship', super.randomizeOrientation());
  }
}
