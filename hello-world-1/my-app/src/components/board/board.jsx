import React from 'react';
import { Square } from '../square/square';

export class Board extends React.Component {

  constructor(props){
    super(props);

    this.state = { 
      squares: Array(9).fill(null),
      nextPlayer: 'X',
      winningPlayer:'',
      gameStatus: 'Next player: X'
    }
  }

  newGame(){
    this.setState({ 
      squares: Array(9).fill(null),
      nextPlayer: 'X',
      winningPlayer: '',
      gameStatus: 'Next player: X'
    })
  }  

  handleClick(i){

    // console.log('i: ', i);
    // console.log('before: ', this.state);

    if (this.state.squares[i] !== null |
        this.state.winningPlayer !== ''){
      return;
    }

    var gameBoard = {
      boardSquares: [...this.state.squares],
      playerNext: this.state.nextPlayer,
      winner: '',
      currentStatus: ('Next player: ' + this.state.nextPlayer)
    }

    gameBoard.boardSquares[i] = this.state.nextPlayer;
    gameBoard = this.calculateWinner(gameBoard);
    console.log('this.calculateWinner called.')
    console.log(gameBoard);

    this.setState({ squares: gameBoard.boardSquares, winningPlayer: gameBoard.winner, nextPlayer: gameBoard.playerNext, gameStatus: gameBoard.currentStatus }, () => console.log('after', this.state));
  }

  calculateWinner(gameBoard) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameBoard.boardSquares[a] &&
        gameBoard.boardSquares[a] === gameBoard.boardSquares[b] &&
        gameBoard.boardSquares[a] === gameBoard.boardSquares[c]
      ) {
        console.log('WINNER:', gameBoard.boardSquares[a]);
        gameBoard.winner = gameBoard.boardSquares[a];
        gameBoard.currentStatus = ("Winner is: " + gameBoard.boardSquares[a]);
        return gameBoard;
      }
    }

    if (!gameBoard.boardSquares.includes(null)) {
      gameBoard.currentStatus = 'Game drawn!!';
      return gameBoard;
    }

    const prevPlayer = this.state.nextPlayer;
    const currentPlayer = (prevPlayer.toUpperCase() === 'X') ? 'O' : 'X';

    console.log("prev player: " + prevPlayer);
    console.log("currentPlayer: " + currentPlayer);
     
    gameBoard.playerNext = currentPlayer;
    gameBoard.currentStatus = ("Next player: " + currentPlayer);

    return gameBoard;
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={()=> this.handleClick(i)}
      />
    ) ;
  }

  render() {
    return (
      <div>
        <div><button type="reset" onClick={()=> this.newGame()} >New Game</button></div>
        <br />
        <div className="status">{this.state.gameStatus}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}