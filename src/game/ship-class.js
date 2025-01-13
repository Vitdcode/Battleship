import { Gameboard } from './gameboard-class';

export class Ship extends Gameboard {
  constructor(name, length) {
    super();
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.isSunk = false;
  }

  increaseHitCount() {
    return (this.hit += 1);
  }

  checkIfSunk() {
    if (this.hitCount === this.length) {
      return (this.isSunk = true);
    }
    return false;
  }

  createShipData(playerBoard) {
    super.createShipData(playerBoard, super.randomizeOrientation());
  }
}
