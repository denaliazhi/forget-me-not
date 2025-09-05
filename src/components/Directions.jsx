export function Directions({ show, setShow, play, setPlay, children }) {
  return (
    <>
      {show && (
        <dialog open>
          <h1>How To Play</h1>
          <p>{children}</p>
          <button
            className="dialog-btn"
            onClick={() => {
              setShow(false);
              if (!play) {
                setPlay(true);
              }
            }}
          >
            {play ? "Close" : "Start"}
          </button>
        </dialog>
      )}
    </>
  );
}
