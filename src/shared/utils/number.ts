export const addSpacesToNumber = (num?: number): string => {
  if (!num) return '0'
  if (typeof num !== 'number') return num

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const pluralize = (n: number, forms: [string, string, string]): string => {
  const nAbs = Math.abs(n)
  const lastTwo = nAbs % 100
  const lastOne = nAbs % 10

  let form: string

  if (lastTwo >= 11 && lastTwo <= 14) form = forms[2]
  else if (lastOne === 1) form = forms[0]
  else if (lastOne >= 2 && lastOne <= 4) form = forms[1]
  else form = forms[2]

  return `${n} ${form}`
}
