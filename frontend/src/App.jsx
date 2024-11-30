import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Disabilities from './Disabilities';
import Team from './Team';
import FAQ from './FAQ';
import Footer from './Footer';
import CallToAction from './CallToAction';
import LoginRegister from './LoginRegister';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Disabilities />
        <CallToAction />
        <Team />
        <FAQ />
        <LoginRegister />
      </main>
      <Footer />
    </div>
  );
}

export default App;


