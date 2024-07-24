import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 10);
      }, 1000);
      return () => clearInterval(interval);
    }else{
      setStatus('COMPLETE ');
     /* alert("Congratulation's Progress is Completed") */
      
    }
    
  }, [progress]);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
      <div className="status">{status}</div>
    </div>
    
  );
};

export default ProgressBar;
