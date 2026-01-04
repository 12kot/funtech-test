import styles from './styles.module.scss'
import { DiscoverPreviewActions, DiscoverPreviewImages, DiscoverPreviewStats, DiscoverPreviewText } from './_components'

export const DiscoverPreviewBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <article className={styles.content}>
        <DiscoverPreviewText />
        <DiscoverPreviewActions />
        <DiscoverPreviewStats />
      </article>

      <DiscoverPreviewImages />
    </div>
  )
}
