import getRandomNum from '../random-num.js'
import getStatusNumber from '../status-num.js'
export const getGamePrime = () => {
  const numberCheck = getRandomNum()
  const result = getStatusNumber(numberCheck) ? 'yes' : 'no'
  return {
    question: numberCheck,
    correctAnswer: result,
  }
}

export const rules
  = 'Answer "yes" if given number is prime. Otherwise answer "no".'
