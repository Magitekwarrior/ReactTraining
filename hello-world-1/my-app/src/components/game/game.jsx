import React from 'react';
import { Board } from '../board/board';

export class Game extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      nextPlayer: 'X',
      winningPlayer:'',
      gameStatus: 'Next player: X'
    };
  }

  newGame(){
    this.setState({
      history: [{
        squares: Array(9).fill(null),
      }],
      nextPlayer: 'X',
      winningPlayer:'',
      gameStatus: 'Next player: X'
    })
  }  

  render() {


    return (
      <div className="game">
        <div className="game-board">
          <Board
            value={this.state.squares[i]} 
            onClick={()=> this.handleClick(i)}
           />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}