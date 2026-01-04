import { cn } from 'shared/utils'
import { LI, Link, UL } from 'shared/components/ui'

import styles from './styles.module.scss'
import { FooterNavLink } from '../../types'

interface Props {
  links: FooterNavLink[]
  className?: string
}

export const FooterNav: React.FC<Props> = ({ className, links }) => {
  return (
    <nav>
      <UL className={cn(styles.container, className)}>
        {links.map(({ to, label, target, linkClassName }) => (
          <LI key={to}>
            <Link to={to} className={cn(styles.navLink, linkClassName)} target={target}>
              {label}
            </Link>
          </LI>
        ))}
      </UL>
    </nav>
  )
}
