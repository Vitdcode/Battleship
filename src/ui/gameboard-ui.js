export function createGameboardUi(gameboard) {
  const boardWrapper = document.querySelector('#board-wrapper');
  Object.keys(gameboard).forEach((letter, index) => {
    for (let i = 0; i < gameboard[letter].length; i++) {
      const field = document.createElement('div');
      field.id = `${letter}-${i}`;
      field.className = 'field';
      boardWrapper.append(field);
    }
  });
  return boardWrapper;
}

export function printShipOnGameboard(gameboard, shipName) {
  for (const letter in gameboard) {
    const letterArray = gameboard[letter];
    for (let i = 0; i < letterArray.length; i++) {
      if (letterArray[i].includes(shipName)) {
        const shipInUi = document.querySelector(`#${letter}-${i}`);
        const shipPart = document.createElement('div');
        shipPart.id = letterArray[i];
        shipPart.className = 'ship-part';
        shipInUi.appendChild(shipPart);
      }
    }
  }
}
