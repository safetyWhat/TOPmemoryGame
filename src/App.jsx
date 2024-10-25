import imageData from './trees.js';
import Card from './card';


function App() {
  return (
    <div>
      {imageData.map((image, index) => (
        <Card key={index} imageSrc={image.src} imageName={image.name} />
      ))}
    </div>
  );
}  

export default App
