import { createGameboardUi, GameboardUi } from '../../ui/gameboard-ui';
import { Gameboard } from '../gameboard-class';
import { Ship } from '../ship-class';

export class Player1 {
  constructor(name = 'Player 1') {
    this.gameboard = new Gameboard();
    this.GameboardUi = createGameboardUi(this.gameboard);
    this.name = name;
    this.ships = {
      Carrier: this.placeCarrier(),
      Battleship: this.placeBattleship(),
    };
  }

  placeCarrier() {
    const carrier = new Ship(5);
    return carrier.placeCarrier(this.gameboard);
  }

  placeBattleship() {
    const battleship = new Ship(4);
    return battleship.placeBattleship(this.gameboard);
  }

  /*     createBoardUi() {
      createGameboardUi(this.gameboard);
  } */
}