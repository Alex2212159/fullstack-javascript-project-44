const getRandomNum = () => {
  const min = 1
  const max = 100
  const result = Math.floor(Math.random() * (max - min) + min)
  return result
}
export default getRandomNum
