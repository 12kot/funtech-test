import { BlurImage, Img } from 'shared/components/ui'
import { useIsMobile } from 'shared/hooks'
import { IMGDiscoverBanner } from 'shared/assets/img'

import styles from './styles.module.scss'

export const DiscoverBannerImage: React.FC = () => {
  const isMobile = useIsMobile()

  if (isMobile) return <BlurImage src={IMGDiscoverBanner} alt="banner-image" className={styles.container} imageClassName={styles.image} />

  return <Img alt="banner-image" className={styles.container} src={IMGDiscoverBanner} />
}
