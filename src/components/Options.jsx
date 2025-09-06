export function Options({ buttons, selected, handleClick }) {
  return (
    <div className="theme-picker">
      <h3>Pick</h3>
      {buttons.map((button) => (
        <button
          className={selected === button.term && "selected"}
          id={button.term}
          onClick={(e) => handleClick(e.target.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
