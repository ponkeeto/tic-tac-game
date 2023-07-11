function Square(props) {
    const {value, onSquareClick} = props
  return <button className="Cell" onClick={onSquareClick}>{value}</button>;
}

export default Square