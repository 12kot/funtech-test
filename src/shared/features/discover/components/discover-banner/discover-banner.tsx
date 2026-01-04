import styles from './styles.module.scss'
import { DiscoverBannerActions, DiscoverBannerImage, DiscoverBannerText } from './_components'

export const DiscoverBanner: React.FC = () => {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <DiscoverBannerText />
        <DiscoverBannerActions />
      </div>

      <DiscoverBannerImage />
    </article>
  )
}
