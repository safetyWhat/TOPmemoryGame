import React from 'react';
import { useState } from 'react';
import imageData from './trees.js';
import Card from './card';
import Score from './header.jsx';


function App() {
  const [currScore, changeCurrScore] = useState(0);
  const [highScore, changeHighScore] = useState(0);

  const addScore = () => {
    changeCurrScore(() => currScore + 1);
  };

  return (
    <div>
      <Score score={currScore} highScore={highScore} />
      <div id='gameContainer'>
        {imageData.map((image, index) => (
          <Card 
            key={index} 
            imageSrc={image.src} 
            imageName={image.name}
            addScore={addScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App
