import React from 'react';
import './css/Raindrops.css'; // Assuming you have CSS for styling the bubbles

const Raindrops = () => {
  const drops = Array.from({ length: 90 }, () => ({
    speed: Math.floor(Math.random() * 21) + 10, // Random speed between 10 and 30
    text: Math.round(Math.random()) // Random text value of 1 or 0
  }));

  return (
    <div className="raindrops-container">
      <div className="drops">
        {drops.map((drop, index) => (
          <span key={index} style={{ '--speed': drop.speed }}>
            {drop.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Raindrops;
