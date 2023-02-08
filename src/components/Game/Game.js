import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState('running')

  function handleSubmitGuess(tentativeGuess) {
    let nextGuess = {
      id: crypto.randomUUID(),
      value: tentativeGuess,
    }
    const nextGuesses = [...guesses, nextGuess]

    if (tentativeGuess.toUpperCase() === answer) {
      setStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost')
    }

    setGuesses(nextGuesses)
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      {status === 'won' && <Banner status={'won'} numOfGuesses={guesses.length} />}
      {status === 'lost' && <Banner status={'lost'} answer={answer} />}
    </>
  )
}

export default Game
