import { useEffect, useRef, useState } from 'react';
import './index.css';
import Popup from './Popup';


function App() {
  const [position, setPosition] = useState()

  const [points, setPoints] = useState(0)

  const [seconds, setSeconds] = useState(0);

  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    if (seconds >= 10) return console.log("Gameover")

    const interval = setInterval(() => {
      console.log("timer", seconds)
      setSeconds(prev => ++prev)
    }, 1000)

    return () => clearInterval(interval);
  }, [seconds])



  const onClick = e => {
    e.preventDefault()

    if(seconds >= 10) return console.log("gameover")

    getRandomPosition()

    setPoints(prev => ++prev)

  }

  const newGame = e => {
    console.log("NEW GAME")

    setPosition({
      left: "20%",
      top: "20%",
      width: "60%",
      height: "60%",
    })

    setPoints(0)

    setSeconds(0);
  }

  const getRandomPosition = () => {
    let left = Math.floor(Math.random() * 100)
    let top = Math.floor(Math.random() * 100)
    let width = Math.floor(Math.random() * 100)
    let height = Math.floor(Math.random() * 100)

    // clamp
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    width = clamp(width, 20, 60)
    height = clamp(height, 20, 60)

    left = clamp(left, 0, 100 - width)
    top = clamp(top, 0, 100 - height)

    setPosition({
      left: left + "%",
      top: top + "%",
      width: width + "%",
      height: height + "%",
    })
    console.log(position)
  }

  useEffect(() => {
    newGame(null)
  }, [])

  const renderGame = seconds >= 10
  ? <div className='gameover'><h1>GAME OVER</h1></div>
  : ( <Popup
    className="popup"
    style={position}
    onClick={onClick} />)


  return (
    <>
      <header>
        <h1>Pop-up Game</h1>
        <button onClick={newGame}><h2>START NEW GAME</h2></button>
        <h2>Seconds: {seconds} / 10</h2>

        <h2>Points: {points}</h2>
      </header>
      <main className='main'>


       {renderGame}



      </main>
    </>
  );
}

export default App;
