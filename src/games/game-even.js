import getRandomNum from '../random-num.js'
import getBaseGame from '../index.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEvenNumber = (number) => {
  return number % 2 === 0
}

export const getRoundGame = () => {
  const expration = getRandomNum()
  const result = isEvenNumber(expration) ? 'yes' : 'no'
  return {
    question: expration,
    correctAnswer: result,
  }
}
export const funcGame = () => {
  return getBaseGame(rule, getRoundGame)
}
