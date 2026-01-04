import { cn } from 'shared/utils'
import { EAllAppRoutes } from 'config'
import { Link } from 'shared/components/ui'
import { SVGLogoFullInvert } from 'shared/assets/svg'

import { FooterNav } from '..'
import styles from './styles.module.scss'
import { FooterNavLink } from '../../types'

interface Props {
  links: FooterNavLink[]
  navigationClassName?: string
}

export const FooterBrand: React.FC<Props> = ({ links, navigationClassName }) => {
  return (
    <section className={styles.container}>
      <Link to={EAllAppRoutes.HOME} className={styles.logo}>
        <SVGLogoFullInvert />
      </Link>

      <FooterNav links={links} className={cn(styles.nav, navigationClassName)} />
    </section>
  )
}
