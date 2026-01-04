import styles from './styles.module.scss'
import { NFTCardBid, NFTCardTitle } from './_components'

interface Props {
  name: string
  amount: number
}

export const NFTCardInfo: React.FC<Props> = ({ name, amount }) => {
  return (
    <section className={styles.container}>
      <NFTCardTitle name={name} />
      <NFTCardBid amount={amount} />
    </section>
  )
}
