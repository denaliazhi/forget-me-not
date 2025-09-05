export function Slot({ sticker, handleClick }) {
  return (
    <div
      key={sticker.id}
      id={sticker.id}
      className="slot"
      onClick={(e) => {
        let id =
          e.target.parentNode.className === "tray"
            ? e.target.id
            : e.target.parentNode.id;
        console.log("Clicked...");
        handleClick(id);
      }}
    >
      <img src={sticker.url} alt="A sticker" />
    </div>
  );
}
