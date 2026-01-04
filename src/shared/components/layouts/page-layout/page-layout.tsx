import { ReactNode } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props {
  className?: string
  children?: ReactNode
}

export const PageLayout: React.FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}
