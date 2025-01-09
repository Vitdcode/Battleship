export class Gameboard {
  constructor() {
    this.xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    this.board = this.createBoard();
  }

  createBoard() {
    let board = {};
    this.xAxis.forEach((letter) => {
      board[letter] = createYAxisHelperFunction();
    });

    function createYAxisHelperFunction() {
      let board10Spaces = [];
      for (let i = 0; i < 10; i++) {
        board10Spaces.push('');
      }
      return board10Spaces;
    }
    return board;
  }

  /*   placeShipTest(name, length, horizontal = true) {
    if (length === 2 && horizontal) {
      this.board['A'][3] = `${name}1`;
      this.board['B'][3] = `${name}2`;
    } else if (length === 5 && horizontal) {
      this.board['D'][1] = `${name}1`;
      this.board['E'][1] = `${name}2`;
      this.board['F'][1] = `${name}3`;
      this.board['G'][1] = `${name}4`;
      this.board['H'][1] = `${name}5`;
    }
  }

  placeCarrier(horizontal = true) {
    console.log(this.board);
    for (let i = 0; i < 5; i++) {
      this.board[this.xAxis[i]][i] = `Cruiser${i}`;
    }
  }

  placeBattleship() {
    for (let i = 0; i < 4; i++) {
      if (this.board[this.xAxis[i]][i] != '') {
        this.board[this.xAxis[i]][i + 1] = `Battleship${i}`;
      } else {
        this.board[this.xAxis[i]][i] = `Battleship${i}`;
      }
    }
  } */
}
