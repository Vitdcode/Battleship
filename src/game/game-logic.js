import { player1, player2 } from '../main';
import { playersTurnCheck } from './game-turn';

export function attackMiss() {
  player1.playersTurn = !player1.playersTurn;
  player2.playersTurn = !player2.playersTurn;

  playersTurnCheck();
}

export function allShipsSunkCheck(ships, id) {
  const player = id === 'pl1' ? player1 : player2;
  const shipsSunkBoolean = [];
  for (const ship in ships) {
    shipsSunkBoolean.push(ships[ship].isSunk);
  }
  if (shipsSunkBoolean.every((item) => shipsSunkBoolean[0] === item)) {
    alert(`${player.name} has won`);
  }
}
