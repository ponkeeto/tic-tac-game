import Board from "../Board/Board";
import Score from "../Score/Score";

import { useSelector, useDispatch } from "react-redux";
import { selectGame, jumpTo } from "./reducer";

import "./Game.css";

function Game() {
  const game = useSelector(selectGame);
  const { history } = game;
  const currentMove = history.length - 1
  const dispatch = useDispatch();
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
    if (!arr.some(square => square === null)) return "Draw"
    for (let i = 0; i < winCons.length; i++) {
      const [a, b, c] = winCons[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
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
        <button className="Button" onClick={() => dispatch(jumpTo(move))}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <Score
        hasWinner={checkWinner(currentSquares)}
        xIsNext={xIsNext}
      />
      <div className="Game">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          hasWinner={checkWinner(currentSquares)}
        />
        <div className="Game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default Game;
