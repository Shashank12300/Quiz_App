// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const Timer = ({ onTimeout }) => {
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer);
        onTimeout(); // Trigger the callback when the timer reaches zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onTimeout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <Typography variant="h6">
        Time Remaining: {formatTime(timeRemaining)}
      </Typography>
    </Box>
  );
};

export default Timer;
