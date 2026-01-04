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
