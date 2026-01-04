import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/ui'

import styles from './styles.module.scss'

export const DiscoverPreviewActions: React.FC = () => {
  const { t } = useTranslation('discover')

  return (
    <section className={styles.container}>
      <Button size="m" className={styles.exploreMore}>
        {t('preview.actions.exploreMore')}
      </Button>
      <Button colorScheme="outlined" size="m">
        {t('preview.actions.createNFT')}
      </Button>
    </section>
  )
}
