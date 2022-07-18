import { useState } from 'react';
import './index.css';
import Popup from './Popup';


function App() {

  const [reset, setReset] = useState(50);

  const clickHandler = () => {
    setReset(50)
  }

  return (
    <>
      <header>
        <h1>Pop-up Game</h1>
        <button className='buttonStart' onClick={clickHandler}>Start</button>
      </header>
      <main> 
        <Popup xLeft={reset} yTop={reset}/>
      </main>
    </>
  );
}

export default App;
