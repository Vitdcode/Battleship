export class Ship {
  constructor(name, length) {
    this.name = name;
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
}
