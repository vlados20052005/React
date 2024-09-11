import React from 'react';
import {useTimer} from '../hooks/useTimer';
import styles from './styles.module.scss'; 

export const Timer: React.FC = () => {
  const { time, isRunning, renderCount, toggleTimer, resetTimer } = useTimer();

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timeDisplay}>{formatTime(time)}</div>
      <div>Number of component renders: {renderCount}</div>
      <div className={styles.line}></div>
      <div className={styles.buttons}>
        <button 
          onClick={toggleTimer} 
          className={isRunning ? styles.pauseButton : styles.playButton}
        >
          {isRunning ? 'Pause' : 'Play'}
        </button>
        <button onClick={resetTimer} className={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

