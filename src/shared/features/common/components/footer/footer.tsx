import { useTranslation } from 'react-i18next'
import { useIsMobile } from 'shared/hooks'
import { EAllAppRoutes, SOCIAL_LINKS } from 'config'
import { B, Footer, HR } from 'shared/components/ui'
import { SVGFacebook, SVGInstagram, SVGLinkedIn, SVGTwitter } from 'shared/assets/svg'

import styles from './styles.module.scss'
import { FooterBottom, FooterBrand, FooterNav } from './_components'

export const AppFooter: React.FC = () => {
  const isMobile = useIsMobile(550)
  const { t } = useTranslation('common')

  const navigationLinks = [
    { to: EAllAppRoutes.HOME, label: t('footer.navigation.privacyPolicy') },
    { to: EAllAppRoutes.CREATORS, label: t('footer.navigation.termsConditions') },
    { to: EAllAppRoutes.SELL, label: t('footer.navigation.aboutUs') },
    { to: EAllAppRoutes.STATS, label: t('footer.navigation.contact') },
  ]

  const socialNetworkLinks = [
    { to: SOCIAL_LINKS.INSTAGRAM, target: '_blank', label: <SVGInstagram />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.LINKEDIN, target: '_blank', label: <SVGLinkedIn />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.FACEBOOK, target: '_blank', label: <SVGFacebook />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.TWITTER, target: '_blank', label: <SVGTwitter />, linkClassName: styles.link },
  ]

  if (isMobile)
    return (
      <Footer className={styles.container}>
        <FooterBrand links={socialNetworkLinks} navigationClassName={styles.socialNetworkLinks} />
        <FooterNav links={navigationLinks} className={styles.navigationLinks} />
        <HR className={styles.divider} />
        <B className={styles.copyright}>{t('footer.copyrightFull', { year: new Date().getFullYear() })}</B>
      </Footer>
    )

  return (
    <Footer className={styles.container}>
      <FooterBrand links={navigationLinks} />
      <HR className={styles.divider} />
      <FooterBottom socialNetworkLinks={socialNetworkLinks} />
    </Footer>
  )
}
