import { useState } from "react";
import { useEffect } from "react";
import { Slot } from "./Slot";

export function Game({ play, setPlay }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [stickers, setStickers] = useState([]);

  const query = {
    resource: "stickers",
    endpoint: "search",
    // Exposing key so that app can run without backend
    key: "XCk8CWJJK1PN6hLJyEkpwaroDhoU0iFW",
    term: "cute flower",
    limit: 10,
  };

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.giphy.com/v1/${query.resource}/${query.endpoint}?api_key=${
        query.key
      }&q=${query.term.replace(" ", "+")}&limit=${
        query.limit
      }&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Failed to get stickers from GIPHY: ${resp}`);
        }
        return resp.json();
      })
      .then((unpacked) => {
        if (!ignore) {
          const stickerSet = unpacked.data.map(
            (item) => item.images.original.url
          );
          setStickers(stickerSet);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {stickers.map((sticker) => (
        <Slot url={sticker}></Slot>
      ))}
    </>
  );
}
