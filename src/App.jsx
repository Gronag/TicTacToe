import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);
const winningCombinations = [  
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('❌');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === '❌' ? '⭕' : '❌');
    checkForWinner();
  };

  const checkForWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  const renderSquare = (index) => {
    return (
      <div
        className="square"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="Grid-TicTacToe">
        {board.map((square, index) => renderSquare(index))}
      </div>
      <div className="Winner-Message">
        {winner ? `Winner: ${winner}` : `Current player: ${currentPlayer}`}
      </div>
    </div>
  );
};


export default App
