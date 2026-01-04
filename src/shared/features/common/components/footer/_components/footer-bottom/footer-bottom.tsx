import { useTranslation } from 'react-i18next'

import { B } from 'shared/components/ui'

import { FooterNav } from '..'
import styles from './styles.module.scss'
import { FooterNavLink } from '../../types'

interface Props {
  socialNetworkLinks: FooterNavLink[]
}

export const FooterBottom: React.FC<Props> = ({socialNetworkLinks}) => {
  const { t } = useTranslation('common')

  return (
    <section className={styles.container}>
      <B className={styles.copyright}>{t('footer.copyright', { year: new Date().getFullYear() })}</B>
      <FooterNav links={socialNetworkLinks} />
    </section>
  )
}
