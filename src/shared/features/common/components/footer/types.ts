import { ReactNode } from "react"

export interface FooterNavLink {
  to: string
  label: ReactNode
  target?: string
  linkClassName?: string
}
