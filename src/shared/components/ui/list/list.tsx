import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface UlProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children?: ReactNode
}

export const UL: React.FC<UlProps> = ({ className, children, ...rest }) => {
  return (
    <ul className={cn(styles.ul, className)} {...rest}>
      {children}
    </ul>
  )
}

interface LiProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: ReactNode
}

export const LI: React.FC<LiProps> = ({ className, children, ...rest }) => {
  return (
    <li className={cn(styles.li, className)} {...rest}>
      {children}
    </li>
  )
}
