import type { FC } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FirstSection from '@/components/About/FirstSection'

const About: FC = () => {
    return (
        <>
            <Header />
            <main>
                <FirstSection />
            </main>
            <Footer />
        </>
    )
}

export default About