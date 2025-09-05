export function Slot({ url }) {
  console.log(url);
  return (
    <div className="slot">
      <img src={url} alt="A sticker" />
    </div>
  );
}
