import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Img: React.FC<Props> = (props) => {
  return <img {...props} loading="lazy" />
}
