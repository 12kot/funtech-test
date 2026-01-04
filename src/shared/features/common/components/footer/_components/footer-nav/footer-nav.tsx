import { ReactNode } from 'react'

import { cn } from 'shared/utils'
import { LI, Link, UL } from 'shared/components/ui'

import styles from './styles.module.scss'

interface NavLink {
  to: string
  label: ReactNode
  target?: string
  linkClassName?: string
}

interface Props {
  links: NavLink[]
}

export const FooterNav: React.FC<Props> = ({ links }) => {
  return (
    <nav>
      <UL className={styles.container}>
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
