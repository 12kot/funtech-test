import { Trans, useTranslation } from 'react-i18next'

import { B, H1, P } from 'shared/components/ui'

import styles from './styles.module.scss'

export const DiscoverPreviewText: React.FC = () => {
  const { t } = useTranslation('discover')

  return (
    <section className={styles.container}>
      <H1>{t('preview.title')}</H1>
      <P className={styles.subtitle}>
        <Trans components={{ b: <B className={styles.bonus} /> }}>{t('preview.subtitle')}</Trans>
      </P>
    </section>
  )
}
