export function attackShip() {
  const trackingBaord = document.querySelector('#tracking-board-cells-wrapper-pl1');
  trackingBaord.addEventListener('click', (event) => {
    const id = event.target.id;
    console.log(event.target.id);
    shipExists(id);
  });
}

function shipExists(id) {
  let formattedId;
  if (id.includes('pl1')) {
    formattedId = `${id.slice(0, 3)}-pl2`;
  } else {
    formattedId = `${id.slice(0, 3)}-pl1`;
  }

  const otherPlayersBoardCell = document.querySelector(`#${formattedId}`);
  if (otherPlayersBoardCell.childElementCount > 0) {
    const ship = otherPlayersBoardCell.querySelector(':first-child');
    console.log(ship);
  }
  console.log(otherPlayersBoardCell);
}
