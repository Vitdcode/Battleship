import { player1, player2 } from '../main';

export function attackShipEventListener(id) {
  const trackingBaord = document.querySelector(`#tracking-board-cells-wrapper-${id}`);
  trackingBaord.addEventListener('click', (event) => {
    const id = event.target.id;
    console.log(event.target.id);
    attackShip(id);
  });
}

function attackShip(id) {
  let formattedId;
  if (id.includes('pl1')) {
    formattedId = `${id.slice(0, 3)}-pl2`;
  } else {
    formattedId = `${id.slice(0, 3)}-pl1`;
  }
  const currentPlayerBoardCell = document.querySelector(`#${id}`);
  const otherPlayersBoardCell = document.querySelector(`#${formattedId}`);

  if (otherPlayersBoardCell.childElementCount > 0) {
    const ship = otherPlayersBoardCell.querySelector(':first-child');
    ship.style.backgroundColor = 'rgb(15, 31, 55)';
    currentPlayerBoardCell.style.backgroundColor = 'rgb(15, 31, 55)';
    const shipName = ship.id.split('-')[0];

    if (player2.ships[shipName].hitCount < player2.ships[shipName].length) {
      player2.ships[shipName].increaseHitCount();
      player2.ships[shipName].checkIfSunk();
    }

    if (player2.ships[shipName].hitCount === player2.ships[shipName].length) {
      player2.ships[shipName].isSunk = true;
    }
    console.log(player2.ships[shipName]);
  }
  console.log(otherPlayersBoardCell);
}
