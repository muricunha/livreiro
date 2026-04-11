import type { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Livreiro</div>

        <div className={styles.navLinks}>
          <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>
            Home
          </a>
          <a href="#features" className={styles.navLink}>
            Explore
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
        </div>

        <div className={styles.actions}>
          <button className={styles.loginButton} type="button">
            Entrar
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
