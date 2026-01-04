import { useTranslation } from 'react-i18next'

import { SVGEthereum } from 'shared/assets/svg'
import { Button, P, Span } from 'shared/components/ui'

import styles from './styles.module.scss'

interface Props {
  amount: number
}

export const NFTCardBid: React.FC<Props> = ({ amount }) => {
  const { t } = useTranslation('discover')

  return (
    <footer className={styles.container}>
      <div className={styles.bid}>
        <Span className={styles.label}>{t('weekly.card.currentBid')}</Span>

        <div className={styles.value}>
          <SVGEthereum />
          <P className={styles.amount}>{amount}</P>
        </div>
      </div>

      <Button className={styles.button}>{t('weekly.card.placeBid')}</Button>
    </footer>
  )
}
