import getRandomNum from '../random-num.js'

export const getProgressionNum = () => {
  const start = getRandomNum()
  const step = getRandomNum()
  const array = []
  array.push(start)

  let valueLength = getRandomNum()
  let length = valueLength < 5 ? 5 : valueLength > 10 ? 10 : valueLength

  for (let i = 1; i < length; i++) {
    let index = i
    let currentElement = start + index * step
    array.push(currentElement)
  }
  const indexRandom = Math.floor(Math.random() * array.length)

  let answer = array[indexRandom]
  array[indexRandom] = '..'

  return {
    question: array.join(' '),
    correctAnswer: answer,
  }
}

export const rules = 'What number is missing in the progression?'
