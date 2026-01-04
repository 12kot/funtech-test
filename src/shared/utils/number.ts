export const getRandomNumber = (min: number, max: number, precision = 2): number => {
  if (min > max) {
    throw new Error('min must be <= max')
  }

  const factor = 10 ** precision
  const random = Math.random() * (max - min) + min

  return Math.round(random * factor) / factor
}
