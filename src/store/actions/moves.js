export const SELECT_CELL = 'SELECT_CELL'
export const GAME_WON = 'GAME_WON';

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}

// Thunk function
export function thunkFunc(currentPlayer, row, col) {
  return function checkWinner(dispatch, getState) {
    const state = getState();
    const { game, board } = state;
    const winner = calculateWinner(board);
    if (winner) {
      dispatch({type: GAME_WON, winner: winner});
    } else {
      dispatch({
        type: SELECT_CELL,
        currentPlayer,
        row,
        col
      });
    }
  }
}

// Nicked and modified from React Org's own tutorial example
function calculateWinner(squares) {
  const lines = [
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [[x1, y1], [x2, y2], [x3, y3]] = lines[i];
    if (squares[x1][y1] && squares[x1][y1] === squares[x2][y2] && squares[x1][y1] === squares[x3][y3]) {
      return squares[x1][y1];
    }
  }
  return null;
}