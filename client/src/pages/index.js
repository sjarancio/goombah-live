import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Portal from '../components/PortalSection';
import Mint from '../components/MintSection';
import Roadmap from '../components/RoadmapSection';
import Foundation from '../components/FoundationSection';
import Merch from '../components/Merch';
import Family from '../components/FamilySection';
import FAQ from '../components/FAQ';
// import Terms from '../components/TermsSection/Terms';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Mint />
      <Portal />
      <Roadmap />
      <Family />
      <Foundation />
      <Merch />
      <FAQ />
      <Footer />
      {/* <Terms /> */}
    </>
  );
}

export default Home;
