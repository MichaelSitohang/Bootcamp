import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update setiap 1 detik

    // Cleanup function yang menggantikan componentWillUnmount
    return () => clearInterval(timerID);
  }, []); // [] memastikan efek hanya dijalankan sekali saat komponen di-mount

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
};

export default RealTimeClock;
