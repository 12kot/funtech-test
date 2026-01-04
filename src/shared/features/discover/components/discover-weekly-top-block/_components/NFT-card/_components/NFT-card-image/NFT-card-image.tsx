import { Img } from 'shared/components/ui'

import styles from './styles.module.scss'
import { Timer } from './_components'

interface Props {
  time: number
  image: string
}

export const NFTCardImage: React.FC<Props> = ({ image, time }) => {
  return (
    <figure className={styles.container}>
      <Img className={styles.image} src={image} />

      <figcaption className={styles.labelWrapper}>
        <Timer time={time} />
      </figcaption>
    </figure>
  )
}
