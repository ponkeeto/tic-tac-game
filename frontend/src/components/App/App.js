import { useState } from "react";
import Board from "../Board/Board";
import Score from "../Score/Score";

import "./App.css";

function App() {
  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  //const [scoreX, setScoreX] = useState(0);
  //const [scoreO, setScoreO] = useState(0);

  const checkWinner = (arr) => {
    const winCons = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCons.length; i++) {
      const [a, b, c] = winCons[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  };

  /*const addTally = (winner) => {
    if (winner === "X") {
      setScoreX(() => scoreX + 1)
    } else if (winner === "O") {
      setScoreO(() => scoreO + 1)
    }
    return null;
  };*/

  const resetGame = () => setSquares(Array(9).fill(null));
  const winner = checkWinner(squares);

  return (
    <div className="App">
      <Score
        xIsNext={xIsNext}
        winner={winner}
        onReset={resetGame}
        //x={scoreX}
        //o={scoreO}
      />
      <Board
        xIsNext={xIsNext}
        setXIsNext={setXIsNext}
        squares={squares}
        setSquares={setSquares}
        checkWinner={checkWinner}
      />
    </div>
  );
}

export default App;
