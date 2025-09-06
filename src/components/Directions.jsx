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
          <h1>How To Play</h1>
          <p>{children}</p>
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
