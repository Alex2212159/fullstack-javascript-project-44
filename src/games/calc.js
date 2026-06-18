import getRandomNum from '../random-num.js'
export const getExpression = () => {
  const operation = ['+', '-', '*']
  const index = Math.floor(Math.random() * operation.length)
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

export const userRule = 'What is the result of the expression?'
