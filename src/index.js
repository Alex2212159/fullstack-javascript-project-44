import readlineSync from 'readline-sync'

const functionGame = (rule, func) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!\n${rule}`)
  for (let i = 1; i < 4; i++) {
    const obj = func()
    console.log(`Question: ${obj.question}`)
    let answerUser = readlineSync.question('Your answer: ')
    const correctAnswer = obj.correctAnswer
    if (answerUser === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      )
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
export default functionGame
