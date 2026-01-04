import { Img } from 'shared/components/ui'
import { IMGDiscoverBanner } from 'shared/assets/img'

import styles from './styles.module.scss'

export const DiscoverBannerImage: React.FC = () => (
  <Img
    alt="banner-image"
    className={styles.container}
    src={IMGDiscoverBanner}
  />
)
