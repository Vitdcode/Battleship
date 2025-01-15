import { player1, player2 } from '../main';
import { attackHit, attackMiss } from './game-logic';

export function attackShipEventListener(id) {
  const trackingBaord = document.querySelector(`#tracking-board-cells-wrapper-${id}`);
  trackingBaord.addEventListener('click', (event) => {
    const gridCellId = event.target.id;
    attackShip(gridCellId);
  });
}

function attackShip(gridCellId) {
  let otherPlayerGridCell;
  let otherPlayerShips;

  if (gridCellId.includes('pl1')) {
    otherPlayerGridCell = `${gridCellId.slice(0, 3)}-pl2`;
    otherPlayerShips = player2.ships;
  } else {
    otherPlayerGridCell = `${gridCellId.slice(0, 3)}-pl1`;
    otherPlayerShips = player1.ships;
  }

  const currentPlayerGridCellSelector = document.querySelector(`#${gridCellId}`);
  const otherPlayersGridCellSelector = document.querySelector(`#${otherPlayerGridCell}`);

  if (otherPlayersGridCellSelector.childElementCount > 0) {
    const shipSelector = otherPlayersGridCellSelector.querySelector(':first-child');
    shipSelector.style.backgroundColor = 'rgb(15, 31, 55)';
    currentPlayerGridCellSelector.style.backgroundColor = 'rgb(15, 31, 55)';
    const shipName = shipSelector.id.split('-')[0]; //returns just the ship name ex. carrier and not carrier-3
    evaluateAttack(otherPlayerShips, shipName);
  } else {
    currentPlayerGridCellSelector.style.backgroundColor = 'grey';
    attackMiss();
  }
}

function evaluateAttack(otherPlayerShips, shipName) {
  const ship = otherPlayerShips[shipName];
  const shipHitCount = ship.hitCount;
  const shiplength = ship.length;

  if (shipHitCount < shiplength) {
    ship.increaseHitCount();
    ship.checkIfSunk();
  }
  if (ship.isSunk) {
    attackHit(ship);
  }

  console.log(ship);
}
