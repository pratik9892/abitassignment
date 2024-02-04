import Header from "./components/header/Header"
import React from "react"
import HeroSection from "./components/heroSection/HeroSection"
import ProfileCard from "./components/profileCard/ProfileCard"
import Release from "./components/releases/Release"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <React.Fragment>
      <Header/>
      <HeroSection/>
      <div className="absolute md:top-[548px] md:left-[140px] left-0 top-[548px]"><ProfileCard/></div>
      <Release/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
