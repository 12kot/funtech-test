export const formatDate = (dateStr?: string | null) => {
  if (!dateStr) return ''

  const date = dateStr.includes('T') ? dateStr.split('T')[0] : dateStr
  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}
