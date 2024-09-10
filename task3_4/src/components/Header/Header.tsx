// src/components/Header/Header.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame, resetScores } from '../../store';
import { store } from '../../store'; // Add this import
import styles from './styles.module.scss';

type RootState = ReturnType<typeof store.getState>;

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state: RootState) => state.game);

  const handleReset = () => {
    dispatch(resetGame());
    dispatch(resetScores());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.player}>Player 1</div>
      <div className={styles.center}>
        <div className={styles.score}>Score: {score.X}:{score.O}</div>
        <button className={styles.reset} onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className={styles.player}>Player 2</div>
    </div>
  );
};
