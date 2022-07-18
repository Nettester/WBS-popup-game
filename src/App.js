import './index.css';
import Popup from './Popup';


function App() {
  const popupStyle = {left:"10px"};
  return (
    <>
      <header>
        <h1>Pop-up Game</h1>
        <button>Start</button>
      </header>
      <main> 
        <Popup className="popup" style={popupStyle}/>
      </main>
    </>
  );
}

export default App;
