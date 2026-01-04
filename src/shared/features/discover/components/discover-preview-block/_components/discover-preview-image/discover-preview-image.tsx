import { cn } from 'shared/utils'
import { Img } from 'shared/components/ui'
import { IMGArrow, IMGDiscoverBanner, IMGDiscoverBanner2, IMGPoints } from 'shared/assets/img'

import styles from './styles.module.scss'

export const DiscoverPreviewImages: React.FC = () => (
  <section className={styles.container}>
    <PreviewBlurImage src={IMGDiscoverBanner} alt="Preview 1" className={styles.preview1} />
    <PreviewBlurImage src={IMGDiscoverBanner2} alt="Preview 2" className={styles.preview2} />
    <Img src={IMGArrow} alt="Arrow" className={styles.arrow} />
    <Img src={IMGPoints} alt="Points" className={styles.points} />
  </section>
)

interface PreviewBlurImageProps {
  src: string
  alt: string
  className?: string
}

const PreviewBlurImage: React.FC<PreviewBlurImageProps> = ({ src, alt, className }) => (
  <div className={cn(className, styles.withBlur)}>
    <Img src={src} alt={alt} className={styles.image} />
    <Img src={src} alt={alt} className={styles.blur} />
  </div>
)
