export function createGameboardUi(gameboard, id) {
  const boardAndTrackingBoardWrapper = document.createElement('div');
  boardAndTrackingBoardWrapper.id = `board-and-trackingBoard-wrapper-${id}`;
  const board = createBoard(id, boardAndTrackingBoardWrapper);
  const trackingBoard = createTrackingBoard(id, boardAndTrackingBoardWrapper);
  /*   boardAndTrackingBoardWrapper.append(board, trackingBoard); */
  document.body.appendChild(boardAndTrackingBoardWrapper);
  createCells(gameboard, board, id);
  createCells(gameboard, trackingBoard, id);
}

function createCells(gameboard, boardWrapper, id) {
  Object.keys(gameboard).forEach((letter, index) => {
    for (let i = 0; i < gameboard[letter].length; i++) {
      const field = document.createElement('div');
      field.id = `${letter}-${i}-${id}`;
      field.className = 'field';
      boardWrapper.append(field);
    }
  });
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

function createBoardLetters() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const boardLettersDiv = document.createElement('div');
  boardLettersDiv.id = 'board-letters-pl1';

  letters.forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
    boardLettersDiv.appendChild(span);
  });

  return boardLettersDiv;
}

function createBoardNumbers() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const boardNumbersDiv = document.createElement('div');
  boardNumbersDiv.id = 'numbers-board-pl1';

  numbers.forEach((number) => {
    const span = document.createElement('span');
    span.textContent = number;
    boardNumbersDiv.appendChild(span);
  });

  return boardNumbersDiv;
}

export function createBoard(id, boardAndTrackingBoardWrapper) {
  const playerBoard = document.createElement('div');
  playerBoard.id = `player-board-${id}`;

  playerBoard.appendChild(createBoardLetters());
  playerBoard.appendChild(createBoardNumbers());

  const boardWrapper = document.createElement('div');
  boardWrapper.id = `board-wrapper-${id}`;
  playerBoard.appendChild(boardWrapper);
  boardAndTrackingBoardWrapper.appendChild(playerBoard);

  return boardWrapper;
}

function createTrackingBoard(id, boardAndTrackingBoardWrapper) {
  const trackingBoard = document.createElement('div');
  trackingBoard.id = `tracking-board-${id}`;

  trackingBoard.appendChild(createBoardLetters());
  trackingBoard.appendChild(createBoardNumbers());

  const trackingBoardCellsWrapper = document.createElement('div');
  trackingBoardCellsWrapper.id = `tracking-board-cells-wrapper-${id}`;
  trackingBoard.appendChild(trackingBoardCellsWrapper);
  boardAndTrackingBoardWrapper.appendChild(trackingBoard);

  return trackingBoardCellsWrapper;
}
