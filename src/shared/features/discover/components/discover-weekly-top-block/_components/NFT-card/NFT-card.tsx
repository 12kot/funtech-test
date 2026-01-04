import { memo } from 'react'

import { NFT } from 'shared/features/discover'
import { getRandomNumber } from 'shared/utils'
import { IMGPreviewImage1, IMGPreviewImage2, IMGPreviewImage3, IMGPreviewImage4, IMGPreviewImage5 } from 'shared/assets/img'

import styles from './styles.module.scss'
import { NFTCardImage, NFTCardInfo } from './_components'

interface Props {
  nft: NFT
}

const images = [IMGPreviewImage1, IMGPreviewImage2, IMGPreviewImage3, IMGPreviewImage4, IMGPreviewImage5]

const NFTCard: React.FC<Props> = ({ nft }) => {
  const amount = getRandomNumber(0.1, 10, 2)
  const time = getRandomNumber(3600, 86400, 0)
  
  const imageIndex = getRandomNumber(0, images.length - 1, 0)
  const image = images[imageIndex]

  return (
    <article className={styles.container}>
      <NFTCardImage time={time} image={image} />
      <NFTCardInfo name={nft.name} amount={amount} />
    </article>
  )
}

const MemoizedNFTCard = memo(NFTCard)
export { MemoizedNFTCard as NFTCard }
