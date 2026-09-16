import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoFeatures from "../components/BentoFeatures";
import MagicInside from "../components/MagicInside";
import TechSpecs from "../components/TechSpecs";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <div id="features"><BentoFeatures /></div>
      <div id="technology"><MagicInside /></div>
      <div id="design"><TechSpecs /></div>
      <div id="order"><FinalCTA /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </main>
  );
}