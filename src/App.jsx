import { useState } from "react";
import "./App.css";
import { Directions } from "./components/Directions";
import { Game } from "./components/Game";

function App() {
  const [showDialog, setShowDialog] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <h1>Forget Me Not</h1>
      <Directions
        show={showDialog}
        setShow={setShowDialog}
        play={isPlaying}
        setPlay={setIsPlaying}
      >
        Welcome to our garden 🌷. The game is simple: 1. Pick (click on) a
        flower to grow your score. 2. Pick each flower once, no more. 3. Picking
        twice is not very nice! We'll send you out the door.
      </Directions>
      <Game play={isPlaying} setPlay={setIsPlaying}></Game>
      <button
        className="play-btn"
        onClick={() => {
          setIsPlaying(false);
        }}
      >
        Restart
      </button>
      <button className="directions-btn" onClick={() => setShowDialog(true)}>
        How To Play
      </button>
    </>
  );
}

export default App;
