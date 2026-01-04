import { AppFooter, AppHeader } from 'shared/features/common'

import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.container}>
      <AppHeader />

      {children}

      <AppFooter />
    </main>
  )
}
