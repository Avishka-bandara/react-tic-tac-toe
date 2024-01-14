import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      // If the square is already filled or there's a winner, do nothing
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button
      className="w-16 h-16 bg-white border border-gray-300 text-2xl font-bold"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="mb-4 font-bold text-2xl">{status}</div>
      <div className="grid grid-cols-3 gap-4">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div key={index}>{renderSquare(index)}</div>
          ))}
      </div>
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
