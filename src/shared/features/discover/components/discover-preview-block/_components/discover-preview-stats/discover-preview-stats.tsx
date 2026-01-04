import { useTranslation } from 'react-i18next'

import { H3, Span } from 'shared/components/ui'

import styles from './styles.module.scss'

export const DiscoverPreviewStats: React.FC = () => {
  const { t } = useTranslation('discover')

  const stats = [
    { title: t('preview.stats.artists.title'), subtitle: t('preview.stats.artists.subtitle') },
    { title: t('preview.stats.creators.title'), subtitle: t('preview.stats.creators.subtitle') },
    { title: t('preview.stats.collections.title'), subtitle: t('preview.stats.collections.subtitle') },
  ]

  return (
    <section className={styles.container}>
      {stats.map((stat) => (
        <StatBlock key={stat.title} title={stat.title} subtitle={stat.subtitle} />
      ))}
    </section>
  )
}

interface Props {
  title: string
  subtitle: string
}

const StatBlock: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.block}>
      <H3 className={styles.title}>{title}</H3>
      <Span className={styles.subtitle}>{subtitle}</Span>
    </div>
  )
}
