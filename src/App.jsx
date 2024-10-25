// import React from 'react'

import AppDowSection from "./components/AppDowSection"
import ContactSection from "./components/ContactSection"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/global/Footer"
import Header from "./components/global/Header"
import HeroSection from "./components/HeroSection"
import TechnologySection from "./components/TechnologySection"
import VideoSection from "./components/VideoSection"




const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-full.png')] bg-[length:100%_795px] bg-fixed">
            <Header />
            <HeroSection/>
      </div>
      <main>
            <VideoSection/>
            <FeatureSection/>
            <TechnologySection/>
            <AppDowSection/>
            <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
