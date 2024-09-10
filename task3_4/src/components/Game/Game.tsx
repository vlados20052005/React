import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playMove, resetGame } from '../../features/gameSlice';
import styles from './styles.module.scss';
import { store } from '../../store';

import circleImg from '../../assets/circle.png';
import crossImg from '../../assets/cross.png';

type Player = 'X' | 'O' | null;

type RootState = ReturnType<typeof store.getState>;
type Winner = { player: Player; line: number[] } | null;

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const { board, isXNext, winner }: { board: Player[], isXNext: boolean, winner: Winner } = useSelector((state: RootState) => state.game);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (winner || !board.includes(null)) {
      timeoutRef.current = setTimeout(() => {
        dispatch(resetGame());
      }, 5000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [winner, board, dispatch]);

  const handleClick = (index: number): void => {
    if (board[index] || winner) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const player: Player = isXNext ? 'X' : 'O';
    dispatch(playMove({ index, player }));
  };

  const renderSquareContent = (value: Player) => {
    if (value === 'X') {
      return <img src={crossImg} alt="X" className={styles.symbol} />;
    } else if (value === 'O') {
      return <img src={circleImg} alt="O" className={styles.symbol} />;
    }
    return null;
  };

  const getMessage = (isPlayerX: boolean): string => {
    if (winner) {
      if (winner.player === 'X') {
        return isPlayerX ? "You win!" : "You lost!";
      } else if (winner.player === 'O') {
        return isPlayerX ? "You lost!" : "You win!";
      }
    } else if (!board.includes(null)) {
      return "Draw!";
    }
    return isPlayerX === isXNext ? "Your turn:" : "Wait your opponent.";
  };

  const renderSquare = (index: number): JSX.Element => (
    <button
      className={`${styles.square} ${winner && winner.line.includes(index) ? styles.winningSquare : ''}`}
      onClick={() => handleClick(index)}
      disabled={!!board[index] || !!winner}
    >
      {renderSquareContent(board[index])}
    </button>
  );

  const renderWinningLine = () => {
    if (!winner) return null;

    let lineClass = '';
    if (winner.line.includes(0) && winner.line.includes(1) && winner.line.includes(2)) {
      lineClass = 'horizontal-0';
    } else if (winner.line.includes(3) && winner.line.includes(4) && winner.line.includes(5)) {
      lineClass = 'horizontal-1';
    } else if (winner.line.includes(6) && winner.line.includes(7) && winner.line.includes(8)) {
      lineClass = 'horizontal-2';
    } else if (winner.line.includes(0) && winner.line.includes(3) && winner.line.includes(6)) {
      lineClass = 'vertical-0';
    } else if (winner.line.includes(1) && winner.line.includes(4) && winner.line.includes(7)) {
      lineClass = 'vertical-1';
    } else if (winner.line.includes(2) && winner.line.includes(5) && winner.line.includes(8)) {
      lineClass = 'vertical-2';
    } else if (winner.line.includes(0) && winner.line.includes(4) && winner.line.includes(8)) {
      lineClass = 'diagonal-0';
    } else if (winner.line.includes(2) && winner.line.includes(4) && winner.line.includes(6)) {
      lineClass = 'diagonal-1';
    }

    return <div className={`${styles.line} ${styles[`line-${lineClass}`]}`}></div>;
  };

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.playerSide}>
        <h2>Player X</h2>
        <p className={winner && winner.player === 'X' ? styles.winMessage : styles.loseMessage}>
          {getMessage(true)}
        </p>
        <div className={styles.board} style={{ pointerEvents: isXNext ? 'auto' : 'none' }}>
          {board.map((_, index) => (
            <div key={index} className={styles.cell}>
              {renderSquare(index)}
            </div>
          ))}
          {renderWinningLine()}
        </div>
      </div>
      <div className={styles.playerSide}>
        <h2>Player O</h2>
        <p className={winner && winner.player === 'O' ? styles.winMessage : styles.loseMessage}>
          {getMessage(false)}
        </p>
        <div className={styles.board} style={{ pointerEvents: !isXNext ? 'auto' : 'none' }}>
          {board.map((_, index) => (
            <div key={index} className={styles.cell}>
              {renderSquare(index)}
            </div>
          ))}
          {renderWinningLine()}
        </div>
      </div>
    </div>
  );
};
