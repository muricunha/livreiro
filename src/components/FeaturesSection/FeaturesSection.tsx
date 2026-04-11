import type { FC } from 'react'
import styles from './FeaturesSection.module.css'

const BOOK_COVER_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDtSnnamcv8789ai9xwwUWF-po3HYJMyJ5D09AcTfw-r1vq7Vl6S-WSNop43GYIGG14DHmdv5i8-gNsVhqp6a6NdYQI9kg5OPz-R-8i__4pBIpVFshq09ThamD-Xf4GFKeqk0s09NQYKqtRUCJTCJ-3LlBwGEeIGe0ElYM23ccvMiancboky01k1z7YMSUS2p2WH3qbw2P5wRqSJLJJKTskvZ1UQqE-kpUU2L2X3rj6Vf2MbNV2hCxWMlkb2CXKmm9qtnRB2HYDjxI'

const BOOK_COVER_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCd4UlBSEFYdmPgqC89P-aj_3Vjq26Z7Lo5SJmUQJEI2pIwxXFdIyYqh6ugfQujOaDcnKFtaPpSC12T_NI0DzNZDtLLfieS97KUkp_mnT2qE27jm2ARys9p6AMY6nGHrngwFv2hIb0Um5x36x6K1zCEEs-l5Pm7geXE3eWy6eAyswh8FD1Q5VVM2GUwRVydJeyyfvJm6Klm6Y11SxDtK87xSV03vWnLcBP7IMPwEYsUvrGWxn3KmSTz_9ect8RHHhGSOQqiikEdKUc'

const BOOK_COVER_3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAe4WR85OBUAGSBPm805KJnPBzyhIXyDAyPS5s7ZngMpmmJ7JTJY0kBDkBR8Phi6vgi0rs32HemSrPyAARgBJ_DJ6zGsVE-VwBcYgp6lc9pCh2TzCTDOm3v9fGV-C4kgKZMtrIvmJBhT4dmflN7Mcl6ajxVgEs0Gs2x2NENJdhWM86hGeTGIA6LX6fRuKXU8CYqTLSZp13eMJo4TgPq5KAqI4pOFafQTmTn45Bzfdwln-wVzWWwdIoEdimiBknNMNPXgQq4oh_naqI'

const CURATED_BOOK_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCHg0OshJeaNQXHFqLFF7OLVSHcYBQKOTM68F4YdXwZMl61gI0o0Ghth4hddd5dlsEX_KLYR304sX86O7J-wGfM3SkKp9qA_GkJBupi7RLLloYfes0EpgNzGVqRs-fUQxWHO6jW61FwQaWmwv98eu7013om2jlXLrdfdfor3nAuMOyp4kqRAu9DMiczusfwBl0xgg680EZMzHcJEedh_GLeD1l5_tYldj7nNnpifbrGJBbtbEUy1a88xEf0QJyxN4RWkYSZtjzHgw4'

const CURATED_BOOK_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgK8NTSD2c0U8XZjOijEzX5Y311ZEaGRuJvMGbk5TGG10ywkW6EDpGwpzi_sJsB0_rzo1W4-h4P19-QcHLvNz5kk4n3FA2A9oMa4D4CSuK_SRVbPF0ULOurDpO37Tbir1CIoUVaKg6D-1tSjPsPfO6L44L1Ne0f4D1E7XEYBCu_I5lz_ghNN6uA6WGBrKRx0EylsJUTK0nFiaddSJM2Z8fEDvTw3uiM8DCfZITh1tEqjHGUtwFxtMPVnHxK19K2im7z9hvlXk4LSo'

const READING_PROGRESS_PERCENT = 65
const READING_CURRENT_PAGE = 245

const FeaturesSection: FC = () => {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerText}>
            <h2 className={styles.sectionTitle}>Curadoria para o Leitor Moderno.</h2>
            <p className={styles.sectionDescription}>
              Ferramentas desenhadas para quem valoriza não apenas o conteúdo, mas a estética e o
              ritmo da experiência literária.
            </p>
          </div>
          <div className={styles.exploreLink}>Explore todas as funções</div>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card: Estante Personalizada */}
          <div className={`${styles.card} ${styles.cardShelf}`}>
            <div className={styles.cardContent}>
              <span className="material-symbols-outlined" style={{ fontSize: '2.25rem', color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'block' }}>
                auto_stories
              </span>
              <h3 className={styles.cardTitle}>Estante Personalizada</h3>
              <p className={styles.cardDescription}>
                Organize sua coleção com beleza. Crie categorias, visualize capas em alta resolução
                e ordene por cor, autor ou sentimento.
              </p>
            </div>
            <div className={styles.bookCovers}>
              <div className={`${styles.bookCoverWrapper} ${styles.bookCover1}`}>
                <img src={BOOK_COVER_1} alt="Capa de livro minimalista" className={`${styles.bookCoverImage} arch-mask`} />
              </div>
              <div className={`${styles.bookCoverWrapper} ${styles.bookCover2}`}>
                <img src={BOOK_COVER_2} alt="Capa de livro vintage" className={`${styles.bookCoverImage} arch-mask`} />
              </div>
              <div className={`${styles.bookCoverWrapper} ${styles.bookCover3}`}>
                <img src={BOOK_COVER_3} alt="Capa de livro de poesia moderna" className={`${styles.bookCoverImage} arch-mask`} />
              </div>
            </div>
          </div>

          {/* Card: Progresso */}
          <div className={`${styles.card} ${styles.cardProgress}`}>
            <span className="material-symbols-outlined" style={{ fontSize: '2.25rem', color: 'var(--color-secondary)', marginBottom: '1.5rem', display: 'block' }}>
              timeline
            </span>
            <h3 className={styles.cardTitle}>Acompanhe seu Progresso</h3>
            <p className={styles.cardDescription}>
              Nunca perca o fio da meada. Registre citações, pensamentos e veja quanto tempo falta
              para o fim do capítulo através de gráficos elegantes.
            </p>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${READING_PROGRESS_PERCENT}%` }}
                role="progressbar"
                aria-valuenow={READING_PROGRESS_PERCENT}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className={styles.progressLabels}>
              <span>Página {READING_CURRENT_PAGE}</span>
              <span>{READING_PROGRESS_PERCENT}% Concluído</span>
            </div>
          </div>

          {/* Card: Descobertas */}
          <div className={`${styles.card} ${styles.cardDiscovery}`}>
            <div className={styles.discoveryGlow} aria-hidden="true" />
            <div className={styles.discoveryText}>
              <span className={styles.discoveryEyebrow}>Exclusivo para você</span>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>
                Descobertas Curadas
              </h3>
              <p className={styles.discoveryDescription}>
                Novos livros que combinam com você. Nossa curadoria entende seu gosto e sugere obras
                raras e contemporâneas que ressoam com sua alma.
              </p>
              <button className={styles.discoveryButton} type="button">
                Ver Recomendações
              </button>
            </div>
            <div className={styles.discoveryImages}>
              <div className={`${styles.discoveryImgWrapper} arch-mask`}>
                <img
                  src={CURATED_BOOK_1}
                  alt="Livro curado 1 — capa minimalista sobre veludo"
                  className={`${styles.discoveryImg} arch-mask`}
                />
              </div>
              <div className={`${styles.discoveryImgWrapper} ${styles.discoveryImgOffset} arch-mask`}>
                <img
                  src={CURATED_BOOK_2}
                  alt="Livro curado 2 — tomo filosófico clássico"
                  className={`${styles.discoveryImg} arch-mask`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
