import { useState, useEffect, useRef, useCallback } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
    }
  }, [isRunning]);

  const stopTimer = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
    }
  }, [isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const toggleTimer = useCallback(() => {
    isRunning ? stopTimer() : startTimer();
  }, [isRunning, startTimer, stopTimer]);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);

    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  return { time, isRunning, renderCount, toggleTimer, resetTimer };
};

