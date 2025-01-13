export function createGameboardUi(gameboard, id) {
  let boardWrapper;
  if (id === 'pl1') {
    boardWrapper = document.querySelector('#board-wrapper-pl1');
  } else {
    boardWrapper = document.querySelector('#board-wrapper-pl2');
  }
  Object.keys(gameboard).forEach((letter, index) => {
    for (let i = 0; i < gameboard[letter].length; i++) {
      const field = document.createElement('div');
      field.id = `${letter}-${i}-${id}`;
      field.className = 'field';
      boardWrapper.append(field);
    }
  });
  return boardWrapper;
}

export function printShipOnGameboard(gameboard, shipName, id) {
  for (const letter in gameboard) {
    const letterArray = gameboard[letter];
    for (let i = 0; i < letterArray.length; i++) {
      if (letterArray[i].includes(shipName)) {
        const shipInUi = document.querySelector(`#${letter}-${i}-${id}`);
        const shipPart = document.createElement('div');
        shipPart.id = letterArray[i];
        shipPart.className = 'ship-part';
        shipInUi.appendChild(shipPart);
      }
    }
  }
}
