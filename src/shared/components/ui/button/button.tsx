import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean
  children?: React.ReactNode
  size?: 'm' | 'xl'
  colorScheme?: 'primary' | 'ghost' | 'outlined-alt' | 'outlined'
}

export const Button: React.FC<Props> = ({ className, children, loading, size, colorScheme = 'primary', type = 'button', ...rest }) => {
  return (
    <button type={type} className={cn(styles.container, size && styles[size], colorScheme && styles[colorScheme], className)} {...rest}>
      {children}
    </button>
  )
}
