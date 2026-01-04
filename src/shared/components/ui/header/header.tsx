import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: ReactNode
}

export const Header: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <header className={cn(styles.container, className)} {...rest}>
      {children}
    </header>
  )
}
