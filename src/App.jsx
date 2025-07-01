import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Characters from './components/Characters';
import MoreReasons from './components/MoreReasons';
import VideoSection from './components/VideoSection';
import Rewards from './components/Rewards';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Characters />
      <MoreReasons />
      <VideoSection />
      <Rewards />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;