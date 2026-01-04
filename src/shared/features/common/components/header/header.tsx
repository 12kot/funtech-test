import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/utils'
import { EAllAppRoutes } from 'config'
import { SVGLogoIcon } from 'shared/assets/svg'
import { Button, Header, LI, Link, UL } from 'shared/components/ui'

import styles from './styles.module.scss'

const SCROLLED_THRESHOLD = 11

export const AppHeader: React.FC = () => {
  const { t } = useTranslation('common')

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY >= SCROLLED_THRESHOLD

      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    {
      to: EAllAppRoutes.HOME,
      label: t('header.navigation.discover'),
    },
    {
      to: EAllAppRoutes.CREATORS,
      label: t('header.navigation.creators'),
    },
    {
      to: EAllAppRoutes.SELL,
      label: t('header.navigation.sell'),
    },
    {
      to: EAllAppRoutes.STATS,
      label: t('header.navigation.stats'),
    },
  ]

  return (
    <Header className={cn(styles.container, isScrolled && styles.scrolled)}>
      <section className={styles.content}>
        <Link to={EAllAppRoutes.HOME} className={styles.logo}>
          <SVGLogoIcon />
        </Link>

        <nav>
          <UL className={styles.navList}>
            {navLinks.map(({ to, label }) => (
              <LI key={to}>
                <Link to={to}>{label}</Link>
              </LI>
            ))}
          </UL>
        </nav>
      </section>

      <Button type="button" className={styles.walletButton}>
        {t('header.connectWallet')}
      </Button>
    </Header>
  )
}
