import isEvenNumber from '../check-even.js'
import getRandomNum from '../random-num.js'

export const funcGame = () => {
  const expration = getRandomNum()
  const result = isEvenNumber(expration) ? 'yes' : 'no'
  return {
    question: expration,
    correctAnswer: result,
  }
}

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
