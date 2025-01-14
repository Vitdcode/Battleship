import { player1, player2 } from '../main';
import { playersTurnCheck } from './game-turn';

export function attackMiss() {
  player1.playersTurn = !player1.playersTurn;
  player2.playersTurn = !player2.playersTurn;

  playersTurnCheck();
}

export function attackHit(ship) {
  if (ship.isSunk) {
  }
}
