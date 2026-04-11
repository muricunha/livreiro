import type { FC } from 'react'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Livreiro</div>
          <p className={styles.brandTagline}>
            Cultivando o prazer da leitura no mundo digital através do design e da organização.
          </p>
        </div>

        <nav className={styles.legalLinks} aria-label="Links legais">
          <a href="#" className={styles.legalLink}>
            Privacy Policy
          </a>
          <a href="#" className={styles.legalLink}>
            Terms of Service
          </a>
          <a href="#" className={styles.legalLink}>
            Librarian Access
          </a>
        </nav>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>© {CURRENT_YEAR} Livreiro. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <button
              className={styles.socialIcon}
              type="button"
              aria-label="Compartilhar"
            >
              <span className="material-symbols-outlined">share</span>
            </button>
            <button
              className={styles.socialIcon}
              type="button"
              aria-label="Enviar e-mail"
            >
              <span className="material-symbols-outlined">mail</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
