import getRandomNum from '../random-num.js'
import getBaseGame from '../index.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getStatusNumber = (num) => {
  if (num < 2) {
    return false
  }

  if (num === 2) {
    return true
  }

  if (num > 2 && num % 2 === 0) {
    return false
  }

  if (num > 2) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

const getRoundGame = () => {
  const numberCheck = getRandomNum()
  const result = getStatusNumber(numberCheck) ? 'yes' : 'no'
  return {
    question: numberCheck,
    correctAnswer: result,
  }
}

export const getGamePrime = () => {
  return getBaseGame(rule, getRoundGame)
}
