import readlineSync from 'readline-sync'
const getName = () => {
  const userName = readlineSync.question('May I have your name? ')
  const result = 'Hello, ' + userName + '!'
  return result
}

export default getName
