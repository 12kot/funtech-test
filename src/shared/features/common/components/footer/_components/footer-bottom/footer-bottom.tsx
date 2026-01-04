import { useTranslation } from 'react-i18next'

import { SOCIAL_LINKS } from 'config'
import { B } from 'shared/components/ui'
import { SVGFacebook, SVGInstagram, SVGLinkedIn, SVGTwitter } from 'shared/assets/svg'

import { FooterNav } from '..'
import styles from './styles.module.scss'

export const FooterBottom: React.FC = () => {
  const { t } = useTranslation('common')

  const links = [
    { to: SOCIAL_LINKS.INSTAGRAM, target: '_blank', label: <SVGInstagram />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.LINKEDIN, target: '_blank', label: <SVGLinkedIn />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.FACEBOOK, target: '_blank', label: <SVGFacebook />, linkClassName: styles.link },
    { to: SOCIAL_LINKS.TWITTER, target: '_blank', label: <SVGTwitter />, linkClassName: styles.link },
  ]

  return (
    <section className={styles.container}>
      <B className={styles.copyright}>{t('footer.copyright', { year: new Date().getFullYear() })}</B>
      <FooterNav links={links} />
    </section>
  )
}
