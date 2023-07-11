import { useState } from "react";
import Board from "../Board/Board";
import Score from "../Score/Score";

import "./App.css";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

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
    if (!arr.some(elem => elem === null)) return "It's a draw"
    return null;
  };

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="Item">
        <button className="Button" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="App">
      <Score
        winner={checkWinner(currentSquares)}
        xIsNext={xIsNext}
        //onReset={resetGame}
        //x={scoreX}
        //o={scoreO}
      />
      <div className="Game">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          hasWinner={checkWinner(currentSquares)}
        />
        <div className="Game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
