import { useTranslation } from 'react-i18next'

import { EAllAppRoutes } from 'config'
import { Link } from 'shared/components/ui'
import { SVGLogoFullInvert } from 'shared/assets/svg'

import { FooterNav } from '..'
import styles from './styles.module.scss'

export const FooterBrand: React.FC = () => {
  const { t } = useTranslation('common')

  const links = [
    { to: EAllAppRoutes.HOME, label: t('footer.navigation.privacyPolicy') },
    { to: EAllAppRoutes.CREATORS, label: t('footer.navigation.termsConditions') },
    { to: EAllAppRoutes.SELL, label: t('footer.navigation.aboutUs') },
    { to: EAllAppRoutes.STATS, label: t('footer.navigation.contact') },
  ]

  return (
    <section className={styles.container}>
      <Link to={EAllAppRoutes.HOME} className={styles.logo}>
        <SVGLogoFullInvert />
      </Link>

      <FooterNav links={links} />
    </section>
  )
}
