import type { FC } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import QuoteSection from '@/components/QuoteSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

const Home: FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <QuoteSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
