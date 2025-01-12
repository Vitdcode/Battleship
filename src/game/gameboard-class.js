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

  placeShipOnGameboard(playerBoard, shipName, orientation = 'horizontal', shipPartCounter = 1) {
    const coorinates = this.randomizeCoordinates();
    const randomXAxis = coorinates[0];
    const randomYAxis = coorinates[1];
    const randomRow = playerBoard[randomXAxis];
    const randomCol = randomRow[randomYAxis];

    if (
      orientation === 'vertical' &&
      this.surroundingSpacesAreEmptyCheckVertical(playerBoard, randomXAxis, randomYAxis)
    ) {
      for (let i = randomYAxis; i < randomYAxis + this.length; i++) {
        randomRow[i] = `${shipName}-${shipPartCounter++}`;
      }
    } else if (
      orientation === 'horizontal' &&
      this.surroundingSpacesAreEmptyCheckHorizontal(playerBoard, randomXAxis, randomYAxis)
    ) {
      const indexInXAxis = this.xAxis().indexOf(randomXAxis);
      for (let i = indexInXAxis; i < indexInXAxis + this.length; i++) {
        playerBoard[this.xAxis()[i]][randomYAxis] = `${shipName}-${shipPartCounter++}`;
      }
    } else {
      this.placeShipOnGameboard(
        playerBoard,
        shipName,
        (orientation = 'horizontal'),
        (shipPartCounter = 1)
      );
    }
  }

  surroundingSpacesAreEmptyCheckVertical(playerBoard, randomXAxis, randomYAxis) {
    if (
      this.checkVertical(playerBoard, randomXAxis, randomYAxis, 'top') &&
      this.checkVertical(playerBoard, randomXAxis, randomYAxis, 'bottom') &&
      this.checkAdjacentSide(playerBoard, randomXAxis, randomYAxis, 'left') &&
      this.checkAdjacentSide(playerBoard, randomXAxis, randomYAxis, 'right')
    ) {
      return true;
    }
  }

  surroundingSpacesAreEmptyCheckHorizontal(playerBoard, randomXAxis, randomYAxis) {
    if (
      this.checkAdjacentSideHorizontal(playerBoard, randomXAxis, randomYAxis, 'left') &&
      this.checkAdjacentSideHorizontal(playerBoard, randomXAxis, randomYAxis, 'right')
    ) {
      return true;
    }
  }

  checkVertical(playerBoard, randomXAxis, randomYAxis, direction) {
    //checks the top and bottom of the ship if it is empty if the ship is placed vertically
    if (
      (randomYAxis === 0 && direction === 'top') ||
      (randomYAxis + this.length - 1 === 9 && direction === 'bottom')
    ) {
      return true;
    }

    const letterArray = playerBoard[randomXAxis];
    const checkIndex = direction === 'top' ? randomYAxis - 1 : randomYAxis + this.length;
    return letterArray[checkIndex] === '';
  }

  checkAdjacentSideVertical(playerBoard, randomXAxis, randomYAxis, direction) {
    //checks the left and right side of the ship if it is empty if the ship is placed vertically
    if (
      (randomXAxis === 'A' && direction === 'left') ||
      (randomXAxis === 'J' && direction === 'right')
    ) {
      return true;
    }

    const currentLetterIndex = this.xAxis().indexOf(randomXAxis);
    const offset = direction === 'left' ? -1 : 1;
    const AdjacentLetterArrayOnBoard = playerBoard[this.xAxis()[currentLetterIndex + offset]];

    return AdjacentLetterArrayOnBoard?.slice(randomYAxis, randomYAxis + this.length).every(
      (item) => item === ''
    );
  }

  checkAdjacentSideHorizontal(playerBoard, randomXAxis, randomYAxis, direction) {
    //checks the left and right side of the ship if it is empty if the ship is placed horizontally
    const currentLetterIndex = this.xAxis().indexOf(randomXAxis);

    if (
      (randomXAxis === 'A' && direction === 'left') ||
      (this.xAxis()[currentLetterIndex + this.length - 1] === 'J' && direction === 'right')
    ) {
      return true;
    }

    const adjacentLetter =
      direction === 'left'
        ? this.xAxis()[currentLetterIndex - 1]
        : this.xAxis()[currentLetterIndex + this.length];

    const adjacentBoardCell = playerBoard[adjacentLetter]?.[randomYAxis];

    if (adjacentBoardCell === '') {
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
