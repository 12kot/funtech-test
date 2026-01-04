import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  children?: ReactNode
}

export const HR: React.FC<Props> = ({ className, children, ...rest }) => {
  return <div className={cn(styles.container, className)} {...rest} />
}
