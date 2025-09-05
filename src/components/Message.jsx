export function Message({ sticker, handleClick }) {
  return (
    <div className="msg-bar">
      <h3>Uh oh...</h3>
      <div>
        <p>It looks like you picked this flower twice! </p>
        <img src={sticker} />
      </div>
      <button onClick={handleClick}>Try again</button>
    </div>
  );
}
