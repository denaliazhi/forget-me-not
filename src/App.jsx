import { useState } from "react";
import "./App.css";
import { Directions } from "./components/Directions";
import { Game } from "./components/Game";

function App() {
  const [showDialog, setShowDialog] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  return (
    <>
      <div>
        <span id="title"></span>
        <Directions
          show={showDialog}
          setShow={setShowDialog}
          first={isFirst}
          setFirst={setIsFirst}
          setPlay={setIsPlaying}
        >
          {`Welcome to our garden 🌷. The game is simple:
          1. Pick (click on) a flower to grow your score. 
          2. Pick each flower once, no more.
          3. Picking twice is not very nice! We'll send you to the door.`}
        </Directions>
        <Game play={isPlaying} setPlay={setIsPlaying}></Game>
        <button className="directions-btn" onClick={() => setShowDialog(true)}>
          ?
        </button>
      </div>
      <footer>
        <p>
          Powered by <a href="https://developers.giphy.com/">GIPHY</a>
          <span></span>
        </p>
      </footer>
    </>
  );
}

export default App;
