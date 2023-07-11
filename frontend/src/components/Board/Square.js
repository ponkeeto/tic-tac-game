import "./Board.css";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="Cell"
      onClick={onSquareClick}
      style={value === "X" ? { color: "red" } : { color: "blue" }}
    >
      {value}
    </button>
  );
}

export default Square;
