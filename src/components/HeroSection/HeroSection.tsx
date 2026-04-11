import type { FC } from 'react'
import styles from './HeroSection.module.css'

const HERO_IMAGE_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAdcpAYHpvhrlzM9I02IPuxWUa6l6j8cYNDiaG6a7F7B6uSoP3Dx2cnsJkZgNbLyVSIJdj4BDdXFoNkk1IzNil6W23dItVc4VC74-s33syNW0CS1SfsjEBCSSGxjUhYGisD12Z81iRWlzHvaYbfrxarjFE3l3pl02Zk730a4GLSlo9-UqTwoY9xYVE6LqoTe2NFfTUJe4dko-Zi5LNUoGzSyTNxeFW0LKXughDltH1qRtEHuDnj67dYeeM6RvcH9LgDznBzq2ZM0A'

const HeroSection: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Bem-vindo ao Livreiro</span>
          <h1 className={styles.headline}>Sua Biblioteca Digital.</h1>
          <p className={styles.description}>
            Organize suas leituras de um jeito bonito, descubra novos livros, acompanhe seu
            progresso e monte sua estante pessoal. Tudo em um lugar só!
          </p>
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} type="button">
              Começar Coleção
            </button>
            <button className={styles.ctaSecondary} type="button">
              <span>Ver Amostra</span>
              <span className={styles.ctaLine} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={`${styles.imageFrame} arch-mask`}>
            <img
              src={HERO_IMAGE_SRC}
              alt="Interior de uma biblioteca clássica iluminada pelo sol com prateleiras cheias de livros antigos"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
