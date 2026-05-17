import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const Header: FC = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Livreiro</div>

        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.navLinkActive : ''}`}
          >
            Home
          </Link>
          <a href="#features" className={styles.navLink}>
            Explore
          </a>
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.navLinkActive : ''}`}
          >
            About
          </Link>
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
