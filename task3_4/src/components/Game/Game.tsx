import React, { useState } from 'react';
import styles from './styles.module.scss';

type Player = 'X' | 'O' | null;

export const Game: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const handleClick = (index: number): void => {
    if (board[index] || winningLine) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    const winner = calculateWinner(newBoard);
    if (winner) {
      setWinningLine(winner.line);
    }
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares: Player[]) => {
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
        return { player: squares[a], line: [a, b, c], index: i };
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner.player}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const renderSquare = (index: number) => {
    return (
      <button
        className={`${styles.square} ${winningLine && winningLine.includes(index) ? styles.winningSquare : ''}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {board.map((_, index) => renderSquare(index))}
        {winningLine && (
          <div className={`${styles.line} ${styles[`line-${calculateWinner(board)?.index}`]}`}></div>
        )}
      </div>
    </div>
  );
};
