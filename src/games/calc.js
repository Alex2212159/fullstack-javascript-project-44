import getRandomNum from '../random-num.js'
import getBaseGame from '../index.js'

const rule = 'What is the result of the expression?'

const getRoundGame = () => {
  const operation = ['+', '-', '*']
  const index = getRandomNum(0, operation.length) // NOSONAR
  let result
  let a = getRandomNum()
  let b = getRandomNum()
  switch (operation[index]) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    default:
      result = 'Неизвестное значение'
  }
  const expration = `${a} ${operation[index]} ${b}`
  return {
    question: expration,
    correctAnswer: String(result),
  }
}

export const getExpression = () => {
  return getBaseGame(rule, getRoundGame)
}
