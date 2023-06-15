import "./GameOver.css"

const GameOver = ({ retry, score }) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>
            Your score was: <span>{score}</span>
        </h2>
        <button onClick={retry}>Restart Game</button>
    </div>
  )
}

export default GameOver