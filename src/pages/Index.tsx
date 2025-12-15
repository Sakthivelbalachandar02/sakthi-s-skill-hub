import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTraining from "@/components/AboutTraining";
import TrainingFlow from "@/components/TrainingFlow";
import CertificatePreview from "@/components/CertificatePreview";
import HowToHost from "@/components/HowToHost";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about">
        <AboutTraining />
      </section>
      <section id="training-flow">
        <TrainingFlow />
      </section>
      <section id="certificate">
        <CertificatePreview />
      </section>
      <section id="hosting">
        <HowToHost />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
