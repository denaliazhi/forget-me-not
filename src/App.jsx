import { useState } from "react";
import "./App.css";
import { Directions } from "./components/Directions";
import { Game } from "./components/Game";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [showDialog, setShowDialog] = useState(true);

  return (
    <>
      <h1>Forget Me Not</h1>
      <Directions
        title="How To Play"
        button="Start"
        show={showDialog}
        setShow={setShowDialog}
      >
        Welcome to our garden 🌷. The game is simple: 1. Pick (click on) a
        flower to grow your score. 2. Pick each flower once, no more. 3. Picking
        twice is not very nice! We'll send you out the door.
      </Directions>
      <Game highScore={highScore}></Game>
      <button className="play-btn">Restart</button>
      <button className="directions-btn" onClick={() => setShowDialog(true)}>
        How To Play
      </button>
    </>
  );
}

export default App;
