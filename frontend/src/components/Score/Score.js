function Score(props) {
  const { xIsNext, winner, onReset /*, x, o*/ } = props;
  const player = xIsNext ? "O" : "X";
  return (
    <>
      {/*<div>
            <h1>SCORE</h1>
            <h2>X - O</h2>
            <h1>{x} - {o}</h1>
        </div>*/}
      {winner && <h1>Winner is {winner}!</h1>}
      {winner ? (
        <button onClick={onReset}>reset game</button>
      ) : (
        <h2>Playing: {player}</h2>
      )}
    </>
  );
}

export default Score;
