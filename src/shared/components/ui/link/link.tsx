import { ReactNode } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props extends NavLinkProps {
  children?: ReactNode
}

export const Link: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <NavLink {...rest} className={cn(styles.container, className)}>
      {children}
    </NavLink>
  )
}
