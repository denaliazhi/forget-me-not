export function Directions({
  show,
  setShow,
  first,
  setFirst,
  setPlay,
  children,
}) {
  let text = first ? "Start" : "Close";
  return (
    <>
      {show && (
        <dialog open>
          <h1>How to play</h1>
          <p>This game is simple 🌷:</p>
          <ol>
            {children.split("\n").map((line, index) => (
              <li>{line}</li>
            ))}
          </ol>
          <button
            className="dialog-btn"
            onClick={() => {
              setShow(false);
              if (first) {
                setPlay(true);
                setFirst(false);
              }
            }}
          >
            {text}
          </button>
        </dialog>
      )}
    </>
  );
}
