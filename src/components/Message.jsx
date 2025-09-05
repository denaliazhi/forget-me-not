export function Message({ title, content, sticker, handleClick }) {
  return (
    <div className="msg-bar">
      <h3>{title}</h3>
      <div>
        <p>{content}</p>
        {sticker && <img src={sticker} />}
      </div>
      <button onClick={handleClick}>Play again</button>
    </div>
  );
}
