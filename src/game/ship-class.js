export class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.isSunk = false;
  }

  hit() {
    return (this.hit += 1);
  }

  isSunk() {
    if (this.hit === this.length) {
      return (this.isSunk = true);
    }
  }

  placeCarrier(playerBoard) {
    for (let i = 0; i < this.length; i++) {
      playerBoard.board[playerBoard.xAxis[0]][i] = `carrier${i}`;
    }
    return playerBoard.board;
  }

  placeBattleship(playerBoard) {
    for (let i = 0; i < 4; i++) {
      if (playerBoard.board[playerBoard.xAxis[i]][i] != '') {
        playerBoard.board[playerBoard.xAxis[i]][i + 1] = `battleship${i}`;
      } else {
        playerBoard.board[playerBoard.xAxis[i]][i] = `battleship${i}`;
      }
    }
    return playerBoard.board;
  }
}
