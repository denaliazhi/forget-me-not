export function Slot({ url, handleClick }) {
  return (
    <div className="slot" onClick={handleClick}>
      <img src={url} alt="A sticker" />
    </div>
  );
}
