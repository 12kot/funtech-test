import { BlurImage, Img } from 'shared/components/ui'
import { IMGArrow, IMGDiscoverBanner, IMGDiscoverBanner2, IMGPoints } from 'shared/assets/img'

import styles from './styles.module.scss'

export const DiscoverPreviewImages: React.FC = () => (
  <section className={styles.container}>
    <BlurImage src={IMGDiscoverBanner} alt="Preview 1" className={styles.preview1} />
    <BlurImage src={IMGDiscoverBanner2} alt="Preview 2" className={styles.preview2} imageClassName={styles.image} />
    <Img src={IMGArrow} alt="Arrow" className={styles.arrow} />
    <Img src={IMGPoints} alt="Points" className={styles.points} />
  </section>
)
