import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import HowIWork from '@/components/HowIWork';
import WhoIHelp from '@/components/WhoIHelp';
import WhyMe from '@/components/WhyMe';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <HowIWork />
        <WhoIHelp />
        <WhyMe />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
