import getRandomNum from '../random-num.js'

export const getProgressionNum = () => {
  const start = getRandomNum()
  const step = getRandomNum()
  const array = []
  array.push(start)

  let valueLength = getRandomNum()
  let length
  if (valueLength < 5) {
    length = 5
  }
  else if (valueLength > 10) {
    length = 10
  }
  else {
    length = valueLength
  }

  for (let i = 1; i < length; i++) {
    let index = i
    let currentElement = start + index * step
    array.push(currentElement)
  }
  const indexRandom = Math.floor(Math.random() * array.length) // NOSONAR

  let answer = array[indexRandom]
  array[indexRandom] = '..'

  return {
    question: array.join(' '),
    correctAnswer: answer,
  }
}

export const rules = 'What number is missing in the progression?'
