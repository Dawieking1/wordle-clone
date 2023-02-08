import React from 'react'

function Banner({ status, answer, numOfGuesses }) {
  const className = status === 'won' ? 'banner happy' : 'banner sad'
  return (
    <div className={className}>
      {status === 'won' ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  )
}

export default Banner
