import { useState } from 'react';
import imageData from './trees.js';
import Card from './card';
import Score from './header.jsx';


function App() {
  const [currScore, changeCurrScore] = useState(0);
  const [highScore, changeHighScore] = useState(0);
  const [cards, setCards] = useState(imageData);
  const [clickedStates, setClickedStates] = useState(
    Object.fromEntries(imageData.map(card => [card.name, false]))
  );

  const addScore = () => {
    changeCurrScore(() => currScore + 1);
  };
  const newHighScore = () => {
    changeHighScore(() => currScore);
    resetScore();
    resetClick();
  }
  const resetScore = () => {
    changeCurrScore(0);
    resetClick();
  }

  const resetClick = () => {
    setClickedStates(Object.fromEntries(cards.map(card => [card.name, false])));
  }
  
  const handleCardClick = (name) => {
    if (!clickedStates[name]) {
      setClickedStates((prevStates) => ({
        ...prevStates,
        [name]: true,
      }));
      addScore();
      shuffleCards();
    } else {
      alert('You already clicked that one!');
      if (currScore > highScore) {
        newHighScore();
      } else {
        resetScore();
      }
      shuffleCards();
    }
  };

  const shuffleCards = () => {
    const shuffledCards = [...cards];
    for (let i = 0; i < shuffledCards.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    console.log('shuffling cards:', shuffledCards); 
    setCards([...shuffledCards]);
  }

  return (
    <div>
      <Score score={currScore} highScore={highScore} />
      <div id='gameContainer'>
        {cards.map((image) => (
          <Card 
            key={image.name} 
            imageSrc={image.src} 
            imageName={image.name}
            /*addScore={addScore}
            newHighScore={newHighScore}
            resetScore={resetScore}
            currScore={currScore}
            highScore={highScore}*/
            isClicked={clickedStates[image.name]}
            changeClick={() => handleCardClick(image.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App
