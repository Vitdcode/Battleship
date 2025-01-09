import { Gameboard } from '../game/gameboard-class';

/* export class GameboardUi {
  constructor() {
    this.gameboardUi = createGameboardUi();
  }

  createGameboardUi(playerBoard) {
    console.log('test');
    const board = playerBoard.board;
    const boardWrapper = document.querySelector('#playerBoard1');
    board.forEach((letter, index) => {
      for (let i = 0; i < board[letter].length; i++) {
        const field = document.createElement('div');
        field.id = `${letter}-${i}`;
        boardWrapper.append(field);
      }
    });
    return boardWrapper;
  }
} */

export function createGameboardUi(gameboard) {
  const board = gameboard.board;
  const boardWrapper = document.querySelector('#board-wrapper');
  Object.keys(board).forEach((letter, index) => {
    for (let i = 1; i <= board[letter].length; i++) {
      console.log(board[letter].length);
      const field = document.createElement('div');
      field.id = `${letter}-${i}`;
      field.className = 'field';
      boardWrapper.append(field);
    }
  });
  return boardWrapper;
}
