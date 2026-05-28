import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealProvider } from "@/components/RevealProvider";
import { Loader } from "@/components/Loader";

export default function HomePage() {
  return (
    <>
      <Loader />
      <RevealProvider />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Gallery />
        <VideoShowcase />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
