export function Message({ title, content, sticker, handleClick }) {
  return (
    <div className="msg-bar">
      {sticker && <img src={sticker} />}
      <div>
        <h3>{title}</h3>

        <p>{content}</p>
      </div>

      <button onClick={handleClick}>Play again</button>
    </div>
  );
}
