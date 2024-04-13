{/*
Create a React component called Timer that displays a timer starting from 00:00:00 and increments every second.

Expected Output:
Timer: 00:00:00
*/}
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment seconds
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          // Reset seconds and increment minutes if 59 seconds reached
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              // Reset minutes and increment hours if 59 minutes reached
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Formatting helper function
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      <h2>Timer: {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}</h2>
    </div>
  );
};

export default Timer;
