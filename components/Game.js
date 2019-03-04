import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X',
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
    });
  }

  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board;
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({
      board, turn
    });
  }

  getWinner () {
  }

  isComplete () {
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
