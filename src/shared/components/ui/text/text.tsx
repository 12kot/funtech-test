import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { cn } from 'shared/utils'

import styles from './styles.module.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children?: ReactNode
}

export const H1: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cn(styles.h1, className)} {...rest}>
      {children}
    </h1>
  )
}

export const H2: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <h2 className={cn(styles.h2, className)} {...rest}>
      {children}
    </h2>
  )
}

export const H3: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <h3 className={cn(styles.h3, className)} {...rest}>
      {children}
    </h3>
  )
}

export const H4: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <h4 className={cn(styles.h4, className)} {...rest}>
      {children}
    </h4>
  )
}

export const P: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <p className={cn(styles.p, className)} {...rest}>
      {children}
    </p>
  )
}

export const B: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <b className={cn(styles.b, className)} {...rest}>
      {children}
    </b>
  )
}

export const Span: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <span className={cn(styles.span, className)} {...rest}>
      {children}
    </span>
  )
}
