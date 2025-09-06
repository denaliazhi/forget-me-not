import { useState } from "react";
import { useEffect } from "react";
import { Slot } from "./Slot";
import { Message } from "./Message";
import { text } from "../text";

export function Game({ play, setPlay, term }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [stickers, setStickers] = useState(
    new Array(10).fill(text.placeholder)
  );
  const [lastMove, setLastMove] = useState(-1);

  const query = {
    resource: "stickers",
    endpoint: "search",
    // Exposing key so that app can run without backend
    key: "XCk8CWJJK1PN6hLJyEkpwaroDhoU0iFW",
    limit: 10,
    // Randomize stickers for each round
    offset: Math.floor(Math.random() * 50) + 1,
  };

  useEffect(() => {
    let ignore = false;
    if (play) {
      setLastMove(-1);
      setScore(0);
      fetch(
        `https://api.giphy.com/v1/${query.resource}/${query.endpoint}?api_key=${
          query.key
        }&q=${term.replace("-", "+")}&limit=${query.limit}&offset=${
          query.offset
        }`
      )
        .then((resp) => {
          if (!resp.ok) {
            throw new Error(`Failed to get stickers from GIPHY: ${resp}`);
          }
          return resp.json();
        })
        .then((unpacked) => {
          if (!ignore) {
            const stickerSet = unpacked.data.map((item) => {
              return {
                id: crypto.randomUUID(),
                url: item.images.original.url,
                count: 0,
              };
            });
            setStickers(stickerSet);
          }
        });
    }

    return () => {
      ignore = true;
    };
  }, [play, term]);

  function shuffle() {
    let copy = [...stickers];
    for (let a = stickers.length - 1; a > 0; a--) {
      let b = Math.floor(Math.random() * (a + 1));
      [copy[b], copy[a]] = [copy[a], copy[b]];
    }
    return copy;
  }

  function handleClick(id) {
    const index = stickers.findIndex((sticker) => sticker.id === id);
    if (index !== -1) {
      let clicked = stickers[index];

      // Sticker clicked for first time
      if (clicked.count === 0) {
        clicked.count++;
        setScore(score + 1);
        setStickers(shuffle());
        // Sticker has been clicked before
      } else {
        setLastMove(index);
        end();
      }
    }
  }

  function end() {
    setPlay(false);
    if (score > highScore) {
      setHighScore(score);
    }
  }

  function restart() {
    setPlay(true);
  }

  return (
    <>
      <div className="tray">
        {stickers.map((sticker) => {
          return (
            <Slot
              sticker={sticker}
              handleClick={play ? handleClick : null}
            ></Slot>
          );
        })}
      </div>
      <div className="scoreboard">
        <div>
          <h2>Current score:</h2>
          <p>{score}</p>
        </div>
        <div>
          <h2>High score:</h2>
          <p>{highScore}</p>
        </div>
      </div>
      {!play && score === 10 ? (
        // Show winning message
        <Message
          title={"Congrats!"}
          content={
            "You've picked each sticker exactly once. We hope you enjoy them, and thank you for visiting 👐."
          }
          sticker={null}
          handleClick={restart}
        />
      ) : lastMove !== -1 ? (
        // Show losing message
        <Message
          title={"Oh no...."}
          content={
            "It looks like you picked this sticker twice! We must ask you to leave now 😔."
          }
          sticker={stickers[lastMove].url}
          handleClick={restart}
        />
      ) : null}
    </>
  );
}
