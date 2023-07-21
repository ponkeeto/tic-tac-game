import { useSelector, useDispatch } from "react-redux";
import { selectGame, increment, handleReset } from "../App/reducer";
import { useEffect } from "react";

function Score({ hasWinner, xIsNext }) {
  const game = useSelector(selectGame);
  const { scoreX, scoreO, scoreDraws } = game;
  const dispatch = useDispatch();
  const win = ["X", "O"];
  
  useEffect(() => {
    if(hasWinner) {
      if (win.includes(hasWinner)) {
        dispatch(increment(hasWinner));
      } else {
        dispatch(increment('Draw'));
      }
    }
  }, [dispatch])

  const display = () => {
    if (hasWinner) {
      if (win.includes(hasWinner)) {
        return `Winner is ${hasWinner}`;
      } else {
        return "It's a draw!";
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
          X: {scoreX} D: {scoreDraws} O: {scoreO}
        </h2>
        <h1>{display()}</h1>
        {hasWinner && (<button onClick={()=> dispatch(handleReset())}>New Game?</button>)}
      </div>
    </>
  );
}

export default Score;
