import { useTranslation } from 'react-i18next'

import { GenericSwiper, H2 } from 'shared/components/ui'

import { NFT } from '../../types'
import { NFTCard } from './_components'
import styles from './styles.module.scss'

interface Props {
  weeklyList: NFT[]
}

export const DiscoverWeeklyTopBlock: React.FC<Props> = ({ weeklyList }) => {
  const { t } = useTranslation('discover')

  return (
    <div className={styles.container}>
      <H2 className={styles.title}>{t('weekly.title')}</H2>

      <GenericSwiper
        loop
        autoPlay
        disableVibrate
        disableFreeMode
        id="NFT-cards"
        disableMousewheel
        className={styles.swiper}
        spaceBetween={40}
        items={weeklyList}
        loopAdditionalSlides={2}
        renderItem={(nft) => <NFTCard nft={nft} />}
      />
    </div>
  )
}
