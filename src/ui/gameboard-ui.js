import { attackShipEventListener } from '../game/attack-ship';

export function createGameboardUi(gameboard, id) {
  const boardAndTrackingBoardWrapper = document.createElement('div');
  boardAndTrackingBoardWrapper.id = `board-and-trackingBoard-wrapper-${id}`;
  const board = createBoard(id, boardAndTrackingBoardWrapper, 'Your Grid');
  const trackingBoard = createTrackingBoard(id, boardAndTrackingBoardWrapper, 'Opponents Grid');
  document.body.appendChild(boardAndTrackingBoardWrapper);
  createCells(gameboard, board, id);
  createCells(gameboard, trackingBoard, `trackingboard-${id}`);
  attackShipEventListener(id);
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

export function createBoard(id, boardAndTrackingBoardWrapper, headerText) {
  const playerBoard = document.createElement('div');
  playerBoard.id = `player-board-${id}`;
  playerBoard.className = 'board';

  playerBoard.appendChild(createBoardLetters());
  playerBoard.appendChild(createBoardNumbers());

  const boardWrapper = document.createElement('div');
  boardWrapper.id = `board-wrapper-${id}`;
  playerBoard.appendChild(boardWrapper);

  const header = document.createElement('h3');
  header.textContent = headerText;
  header.id = `board-header-${id}`;
  boardAndTrackingBoardWrapper.append(header, playerBoard);

  return boardWrapper;
}

function createTrackingBoard(id, boardAndTrackingBoardWrapper, headerText) {
  const trackingBoard = document.createElement('div');
  trackingBoard.id = `tracking-board-${id}`;
  trackingBoard.className = 'tracking-board';

  trackingBoard.appendChild(createBoardLetters());
  trackingBoard.appendChild(createBoardNumbers());

  const trackingBoardCellsWrapper = document.createElement('div');
  trackingBoardCellsWrapper.id = `tracking-board-cells-wrapper-${id}`;
  trackingBoard.appendChild(trackingBoardCellsWrapper);

  const header = document.createElement('h3');
  header.textContent = headerText;
  header.id = `board-header-${id}`;
  boardAndTrackingBoardWrapper.append(header, trackingBoard);

  return trackingBoardCellsWrapper;
}

export function createShipsUnderBoard(ships, boardWrapperSelector, shipsUnderBoardId) {
  const shipsUnderBoardWrapper = document.createElement('div');
  shipsUnderBoardWrapper.id = shipsUnderBoardId;
  boardWrapperSelector.appendChild(shipsUnderBoardWrapper);

  for (const ship in ships) {
    const shipText = document.createElement('h3');
    shipText.textContent = `${ships[ship].name} (${ships[ship].length})`;
    shipText.className = 'ship-text-under-board';
    shipsUnderBoardWrapper.appendChild(shipText);
  }
}

export function shipIsSunkInUI(ship) {
  if (ship.isSunk) {
  }
}
