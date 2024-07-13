import './App.css';
import BasketBallPlayerCard from './Components/BasketBallPlayerCard';

function App() {
  return (
  <>
     <div id="ball-shape">
                <div id="ball-1"></div>
                <div id="ball-2"></div>
                <div id="ball-3"></div>
     </div>
    <div className="App">
       <BasketBallPlayerCard name="LeBron James" 
       image="https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg" 
       position="Forward" 
       stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1,reboundsPerGame: 10.5 }}/>
    </div>
  </>
  );
}

export default App;
