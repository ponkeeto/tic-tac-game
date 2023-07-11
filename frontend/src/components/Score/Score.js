import { useState } from "react";

function Score({ winner, xIsNext }) {
  const [scoreX] = useState(0);
  const [scoreO] = useState(0);
  const [draws, setDraws] = useState(0);

  const win = ["X", "O"];
  const display = () => {
    if (winner) {
      if (win.includes(winner)) {
        return `Winner is ${winner}`;
      } else {
        setDraws(draws + 1)
        return winner;
      }
    } else {
      return `Playing: ${xIsNext ? "X" : "O"}`;
    }
  };

  return (
    <>
      <div>
        <h1>SCORE</h1>
        <h2>
          X: {scoreX} O: {scoreO} D: {draws}
        </h2>
        <h1>{display()}</h1>
      </div>
    </>
  );
}

export default Score;
