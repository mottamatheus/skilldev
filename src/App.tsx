import React from 'react';
import Body from './styles';
import GlobalStyle from './styles/global';
import Background from './components/Background/Particles';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import AboutRight from './components/AboutRight/AboutRight';
import Reasons from './components/Reasons/Reasons';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/index';

function App() {
  return (
      <>
      <Background />
        <Body>
            <Navbar />
            <HeroSection />
            <About />
            <AboutRight />
            <Reasons />
            <Contact />
            <GlobalStyle />
        </Body>
    </>
  );
}

export default App;
