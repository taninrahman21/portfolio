import React, { useEffect, useState } from 'react';
import './AuthorImage.css';

const AuthorImage = () => {
  const [glitches, setGlitches] = useState([]);

  useEffect(() => {

    const createGlitches = () => {
      let count = 3;
      const glitchBoxes = [];
      for (let i = 0; i < count; i++) {
        let style = {};

        if (i === 0) {
          style = {
            clip: `rect(${Math.random() * 1800}px, 9999px, ${Math.random() * 1500}px, 0px)`,
            right: `${Math.floor(Math.random() * 50)}px`,
            left: `${Math.floor(Math.random() * 50)}px`,
          };
        } else if (i === 1) {
          style = {
            clip: `rect(${Math.floor(Math.random() * 1800)}px, 9999px, ${Math.random() * 1200}px, 0px)`,
            right: `${Math.floor(Math.random() * 40)}px`,
            left: `${Math.floor(Math.random() * 40)}px`,
            transform: `scale(${(0.9 + Math.random() * 0.3).toFixed(2)})`
          };
        } else if (i === 2) {
          style = {
            mixBlendMode: "hue",
            clip: `rect(${Math.random() * 1800}px, 9999px, ${Math.random() * 1200}px, 0px)`,
            right: `${Math.floor(Math.random() * 40)}px`,
            left: `${Math.floor(Math.random() * 40)}px`,
            transform: `scale(${(0.9 + Math.random() * 0.3).toFixed(2)})`
          };
        }

        glitchBoxes.push(style);
      }
      setGlitches(glitchBoxes);
    };

    // Call the function initially
    createGlitches();

    // Set interval to update every 300ms
    const intervalId = setInterval(() => {
      createGlitches();
    }, 250);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="author-image hidden lg:block absolute top-0 bottom-0 lg:w-4/12 xl:w-2/5 z-10">
      <div id="author-image-wrap" className='relative w-full h-full float-left overflow-hidden'>
        <div className="glitch back"></div>
        {glitches.map((style, index) => (
          <div key={index} className={`glitch front-${index + 1}`} style={style}></div>
        ))}
      </div>
    </div>
  );
};

export default AuthorImage;