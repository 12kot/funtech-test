import { useTranslation } from 'react-i18next'

import { B, H2 } from 'shared/components/ui'

import styles from './styles.module.scss'

export const DiscoverBannerText: React.FC = () => {
  const { t } = useTranslation('discover')

  return (
    <section className={styles.container}>
      <H2 className={styles.title}>{t('banner.title')}</H2>
      <B className={styles.subtitle}>{t('banner.subtitle')}</B>
    </section>
  )
}
