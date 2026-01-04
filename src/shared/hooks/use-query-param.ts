import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export function useQueryParam<T>(paramKey: string, defaultValue: T): [T, (value?: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams()

  const raw = searchParams.get(paramKey)
  let paramValue: T

  if (raw === null) {
    paramValue = defaultValue
  } else {
    try {
      paramValue = JSON.parse(raw) as T
    } catch {
      paramValue = raw as unknown as T
    }
  }

  const setQueryParam = useCallback(
    (value?: T) => {
      const updatedParams = new URLSearchParams(searchParams)

      if (value === undefined || value === null) {
        updatedParams.delete(paramKey)
      } else {
        updatedParams.set(paramKey, JSON.stringify(value))
      }

      setSearchParams(updatedParams)
    },
    [paramKey, searchParams, setSearchParams]
  )

  return [paramValue, setQueryParam]
}
