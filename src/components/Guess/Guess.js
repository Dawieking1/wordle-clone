import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
  const guessResult = checkGuess(value?.value, answer)

  function Cell({ letter, status }) {
    const classes = status ? `cell ${status}` : 'cell'
    return <span className={classes}>{letter}</span>
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessResult?.[num].letter}
          status={guessResult?.[num].status}
        />
      ))}
    </p>
  )
}

export default Guess
