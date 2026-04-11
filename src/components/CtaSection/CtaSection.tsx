import type { FC } from 'react'
import styles from './CtaSection.module.css'

const CtaSection: FC = () => {
  return (
    <section className={styles.section} aria-label="Chamada para ação">
      <div className={styles.card}>
        <h2 className={styles.title}>Sua jornada literária merece um lar.</h2>
        <p className={styles.description}>
          Junte-se a milhares de arquivistas digitais e transforme a maneira como você interage com
          seus livros favoritos.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryButton} type="button">
            Começar Coleção Agora
          </button>
          <span className={styles.badge}>Grátis por tempo limitado</span>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
