export class Gameboard {
  constructor() {
    this.gameboard = this.createBoard();
  }

  createBoard() {
    const xAxis = this.xAxis();
    this.gameboard = {};
    xAxis.forEach((letter) => {
      this.gameboard[letter] = createYAxisHelperFunction();
    });

    function createYAxisHelperFunction() {
      let board10Spaces = [];
      for (let i = 0; i < 10; i++) {
        board10Spaces.push('');
      }
      return board10Spaces;
    }
    return this.gameboard;
  }

  xAxis() {
    const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return xAxis;
  }

  placeShipOnGameboard(playerBoard, shipName, orientation = 'vertical', shipPartCounter = 1) {
    const coorinates = this.randomizeCoordinates();
    const randomXAxis = coorinates[0];
    const randomYAxis = coorinates[1];
    const randomRow = playerBoard[randomXAxis];
    const randomCol = randomRow[randomYAxis];

    if (
      orientation === 'vertical' &&
      this.surroundingSpacesAreEmpty(playerBoard, randomXAxis, randomYAxis)
    ) {
      for (let i = randomYAxis; i < randomYAxis + this.length; i++) {
        randomRow[i] = `${shipName}-${shipPartCounter++}`;
      }
    } else {
      this.placeShipOnGameboard(
        playerBoard,
        shipName,
        (orientation = 'vertical'),
        (shipPartCounter = 1)
      );
    }
  }

  surroundingSpacesAreEmpty(playerBoard, randomXAxis, randomYAxis) {
    if (
      this.TopIsEmpty(playerBoard, randomXAxis, randomYAxis) &&
      this.bottomIsEmpty(playerBoard, randomXAxis, randomYAxis)
    ) {
      return true;
    }
  }

  TopIsEmpty(playerBoard, randomXAxis, randomYAxis) {
    const upperCoordinate = playerBoard[randomXAxis][randomYAxis - 1];
    if (upperCoordinate != undefined && upperCoordinate === '') {
      return true;
    } else if (randomYAxis === 0) {
      return true;
    }
  }

  bottomIsEmpty(playerBoard, randomXAxis, randomYAxis) {
    const bottomCoordinate = playerBoard[randomXAxis][randomYAxis + this.length - 1];
    if (bottomCoordinate != undefined && bottomCoordinate === '') {
      return true;
    } else if (randomYAxis + this.length === 9) {
      return true;
    }
  }

  randomizeCoordinates() {
    const xAxis = this.xAxis();
    const yAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const randomXAxis = xAxis[Math.floor(Math.random() * xAxis.length)];
    const randomYAxis = yAxis[Math.floor(Math.random() * yAxis.length)];

    return [randomXAxis, randomYAxis];
  }

  randomizeOrientation() {
    const placements = ['vertical', 'horizontal'];
    const randomizePlacement = placements[Math.floor(Math.random() * placements.length)];
    return randomizePlacement;
  }
}
