import React from 'react'
import ScrollSection from './ScrollSection'
import Article from './Article'
import Community from './Community'
import Footer from './Footer'
import HeroSection from './HeroSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ScrollSection />
            <Article />
            <Community />
            <Footer />
        </div>
    )
}

export default Home
