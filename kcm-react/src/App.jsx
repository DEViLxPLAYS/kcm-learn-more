import TopBar from "./components/TopBar/TopBar";
import Hero from "./components/Hero/Hero";
import ProofStrip from "./components/ProofStrip/ProofStrip";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import SecondaryLinks from "./components/SecondaryLinks/SecondaryLinks";
import ClosingCTA from "./components/ClosingCTA/ClosingCTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <ProofStrip />
        <HowItWorks />
        <SecondaryLinks />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}