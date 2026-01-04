import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 550) => {
  const query = `(max-width: ${breakpoint}px)`
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return isMobile
}
