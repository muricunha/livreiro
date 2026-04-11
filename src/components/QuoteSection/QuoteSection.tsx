import type { FC } from 'react'
import styles from './QuoteSection.module.css'

const QUOTE_TEXT = '"Uma biblioteca não é um luxo, mas uma das necessidades da vida."'
const QUOTE_AUTHOR = '— Henry Ward Beecher'

const QuoteSection: FC = () => {
  return (
    <section className={styles.section} aria-label="Citação literária">
      <span
        className={`material-symbols-outlined ${styles.quoteIcon}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
        aria-hidden="true"
      >
        format_quote
      </span>
      <blockquote className={styles.quote}>{QUOTE_TEXT}</blockquote>
      <cite className={styles.author}>{QUOTE_AUTHOR}</cite>
    </section>
  )
}

export default QuoteSection
