import { Gameboard } from '../game/gameboard-class.js';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('board is initialized with empty Strings', () => {
    expect(gameboard.board['A'][0]).toBe('');
  });
});
