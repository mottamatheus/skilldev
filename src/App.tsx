import React from 'react';
import Body from './styles';
import GlobalStyle from './styles/global';
import Background from './components/Background/Particles';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Reasons from './components/Reasons/Reasons';
import Contact from './components/Contact/Contact';

function App() {
  return (
      <>
      <Background />
        <Body>
            <HeroSection />
            <About />
            <Reasons />
            <Contact />
            <GlobalStyle />
        </Body>
    </>
  );
}

export default App;
