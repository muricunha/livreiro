import type { FC } from 'react'
import styles from './FistSection.module.css'


const libraryImageSrc = "src/assets/LibFirstSection.png"


const FirstSection: FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.minorTitle}>EST. MMXXIV</span>
                    <h1 className={styles.majorTitleBlack}>Um repositório para a </h1>
                    <h1 className={styles.majorTitleBrown}>Mente Instrospectiva.</h1>
                    <p className={styles.description}>Acreditamos que a informação não deve ser apenas armazenada,
                        mas curada. O Archival Haven é um refúgio digital para aqueles que
                        valorizam o peso do conhecimento.</p>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={`${styles.imageFrame} arch-mask`}>
                        <img src={libraryImageSrc} alt="Biblioteca clássica" className={styles.image} />
                    </div>
                    <div className={styles.quoteCard}>
                        "A biblioteca é uma esfera cujo centro está em toda parte."
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection