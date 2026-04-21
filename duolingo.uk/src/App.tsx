import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LanguageNav from './components/LanguageNav';
import FeatureSection from './components/FeatureSection';
import LearnAnywhere from './components/LearnAnywhere';
import { SuperDuolingo, CTA } from './components/ExtraSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <LanguageNav />
      <main>
        <FeatureSection 
          title="free. fun. effective."
          description="Learning with Duolingo is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world communication skills."
          linkText="research shows that it works"
          linkHref="/efficacy"
          videoSrc="https://stream.mux.com/fZLc8HBCvnnsJ1Z021CzK00VDsaM2G01QaApokgnLiil6Q.m3u8"
        />
        <LearnAnywhere />
        <SuperDuolingo />
        <FeatureSection 
          reversed
          title="duolingo english test"
          description="Our convenient, fast, and affordable English test integrates the latest assessment science and AI -- empowering anyone to accurately test their English where and when they're at their best."
          videoSrc="https://stream.mux.com/eEVujEMKUUknKhmJ6vtVeHuRtzS51401CFZM6pFp8yj00.m3u8"
          linkText="Certify your English"
          linkHref="https://englishtest.duolingo.com/en"
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
