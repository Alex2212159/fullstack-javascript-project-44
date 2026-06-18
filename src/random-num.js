const getRandomNum = () => {
  const MIN_RANDOM_NUMBER = 1
  const MAX_RANDOM_NUMBER = 100
  const result = Math.floor(
    Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER) + MIN_RANDOM_NUMBER,
  )
  return result
}
export default getRandomNum
