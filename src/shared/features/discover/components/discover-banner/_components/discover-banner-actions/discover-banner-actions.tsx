import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/ui'

import styles from './styles.module.scss'

export const DiscoverBannerActions: React.FC = () => {
  const { t } = useTranslation('discover')

  return (
    <section className={styles.container}>
      <Button colorScheme="ghost" size="xl" className={styles.action}>
        {t('banner.actions.exploreMore')}
      </Button>

      <Button colorScheme="outlined-alt" size="xl" className={styles.action}>
        {t('banner.actions.sellArtwork')}
      </Button>
    </section>
  )
}
