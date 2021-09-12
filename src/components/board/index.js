import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/moves';

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Board = () => {
  const board = useSelector(selectBoard)
  const game = useSelector(selectGame)
  const dispatch = useDispatch()

  function Tile(props) {
    return (
      <div 
        className="tile" 
        onClick={() => dispatch(
          selectCell(
            game.currentPlayer,
            props.x,
            props.y
          )
        )}
      >
        <div>{props.player}</div>
      </div>
    );
  };

  return (
    <div className="Board">
      <Tile x="0" y="0" player={board[0][0]} />
      <Tile x="0" y="1" player={board[0][1]} />
      <Tile x="0" y="2" player={board[0][2]} />
      <Tile x="1" y="0" player={board[1][0]} />
      <Tile x="1" y="1" player={board[1][1]} />
      <Tile x="1" y="2" player={board[1][2]} />
      <Tile x="2" y="0" player={board[2][0]} />
      <Tile x="2" y="1" player={board[2][1]} />
      <Tile x="2" y="2" player={board[2][2]} />
      <div>Player {game.currentPlayer}</div>
    </div>
  )
}