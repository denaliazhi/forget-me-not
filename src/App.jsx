import { useState } from "react";
import "./App.css";
import { Directions } from "./components/Directions";
import { Game } from "./components/Game";
import { text } from "./text";
import { Options } from "./components/Options";

function App() {
  const [showDialog, setShowDialog] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [theme, setTheme] = useState(text.themes[0]);

  function switchTheme(term) {
    const picked = text.themes.findIndex((theme) => theme.term === term);
    setTheme(text.themes[picked]);
  }

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
          {text.directions}
        </Directions>

        <Game play={isPlaying} setPlay={setIsPlaying} term={theme.term}></Game>
        <div className="game-bar">
          <button
            className="directions-btn"
            onClick={() => setShowDialog(true)}
          >
            ?
          </button>
          <Options
            buttons={text.themes}
            selected={theme.term}
            handleClick={switchTheme}
          ></Options>
        </div>
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
