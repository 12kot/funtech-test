import { H4 } from 'shared/components/ui'

import styles from './styles.module.scss'

interface Props {
  name: string
}

export const NFTCardTitle: React.FC<Props> = ({ name }) => {
  return <H4 className={styles.container}>{name}</H4>
}
