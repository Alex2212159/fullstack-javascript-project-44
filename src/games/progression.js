import getRandomNum from '../random-num.js'
import getBaseGame from '../index.js'

const rule = 'What number is missing in the progression?'

const getRoundGame = () => {
  const start = getRandomNum()
  const step = getRandomNum()
  const array = []
  array.push(start)
  let length = getRandomNum(5, 11)
  for (let i = 1; i < length; i++) {
    let index = i
    let currentElement = start + index * step
    array.push(currentElement)
  }
  const indexRandom = getRandomNum(0, array.length) // NOSONAR

  let answer = array[indexRandom]
  array[indexRandom] = '..'

  return {
    question: array.join(' '),
    correctAnswer: answer,
  }
}

export const getProgressionNum = () => {
  return getBaseGame(rule, getRoundGame)
}
