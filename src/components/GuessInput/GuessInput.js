import React from 'react'

function GuessInput({ handleSubmitGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (tentativeGuess.length !== 5) {
      window.alert('Guess must be 5 letters long.')
      return
    }

    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={status !== 'running'}
        pattern="[a-zA-Z]{5}"
        title="Guess must be 5 letters long."
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setTentativeGuess(nextGuess)
        }}
        id="guess-input"
        type="text"
      />
    </form>
  )
}

export default GuessInput
