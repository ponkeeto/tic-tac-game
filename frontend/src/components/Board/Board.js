import Square from "./Square";
import "./Board.css";

function Board({ squares, onPlay, xIsNext, hasWinner }) {
  const rows = [0, 1, 2];
  const handleClick = (i) => {
    if (squares[i] || hasWinner) return;
    let newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onPlay(newSquares);
  };

  return (
    <div className="Board">
      {rows.map((row) => {
        return (
          <div className={`Row ${row}`} key={row}>
            {squares.map((square, index) => {
              if (index % 3 === row) {
                return (
                  <Square
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index)}
                  />
                );
              }
              return null;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
