import Square from "./Square";
import "./Board.css";

function Board(props) {
  const { xIsNext, setXIsNext, squares, setSquares, checkWinner } = props;

  const handleClick = (i) => {
    if (checkWinner(squares)) return;
    const nextSquares = squares.slice();
    if (nextSquares[i]) return;
    if (xIsNext) {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="Board">
      <div className="Row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="Row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="Row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
