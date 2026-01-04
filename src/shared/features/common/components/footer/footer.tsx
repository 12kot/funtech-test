import { Footer, HR } from 'shared/components/ui'

import styles from './styles.module.scss'
import { FooterBottom, FooterBrand } from './_components'

export const AppFooter: React.FC = () => {
  return (
    <Footer className={styles.container}>
      <FooterBrand />
      <HR className={styles.divider} />
      <FooterBottom />
    </Footer>
  )
}
