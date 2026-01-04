import { DiscoverBanner } from '..'
import styles from './styles.module.scss'

export const DiscoverBannerBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <DiscoverBanner />
    </div>
  )
}
