export function Directions({ title, button, show, setShow, children }) {
  return (
    <>
      {show && (
        <dialog closedBy="none" open>
          <h1>{title}</h1>
          <p>{children}</p>
          <button className="dialog-btn" onClick={() => setShow(false)}>
            {button}
          </button>
        </dialog>
      )}
    </>
  );
}
