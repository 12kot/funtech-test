import { cn } from 'shared/utils'

import { Img } from '../img'
import styles from './styles.module.scss'

interface Props {
  src: string
  alt: string
  className?: string
  imageClassName?: string
}

export const BlurImage: React.FC<Props> = ({ src, alt, className, imageClassName }) => (
  <div className={cn(className, styles.container)}>
    <Img src={src} alt={alt} className={cn(styles.image, imageClassName)} />
    <Img src={src} alt={alt} className={cn(styles.blur, imageClassName)} />
  </div>
)
