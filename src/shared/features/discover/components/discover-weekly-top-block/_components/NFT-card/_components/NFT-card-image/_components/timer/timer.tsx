import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { P } from 'shared/components/ui'
import styles from './styles.module.scss'

interface Props {
  time: number
}

export const Timer: React.FC<Props> = ({ time }) => {
  const { t } = useTranslation('discover')
  const [secondsLeft, setSecondsLeft] = useState(time)

  useEffect(() => {
    if (secondsLeft <= 0) return

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [secondsLeft])

  const hours = Math.floor(secondsLeft / 3600)
  const minutes = Math.floor((secondsLeft % 3600) / 60)
  const seconds = secondsLeft % 60

  return (
    <P className={styles.container}>
      {t('weekly.card.time', {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      })}
    </P>
  )
}
