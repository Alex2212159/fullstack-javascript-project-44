import getRandomNum from '../random-num.js'

export const getDivisor = () => {
  let num1 = Math.abs(getRandomNum())
  let num2 = Math.abs(getRandomNum())
  let obj = {
    question: num1 + ' ' + num2,
  }
  while (num2 !== 0) {
    let temp = num1 % num2
    num1 = num2
    num2 = temp
  }
  obj.correctAnswer = num1
  return obj
}
export const rules = 'Find the greatest common divisor of given numbers.'
