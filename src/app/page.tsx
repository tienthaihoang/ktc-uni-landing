import AboutUs from "@/components/about-us";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import ImageGallery from "@/components/image-gallery";
import Organization from "@/components/organization";
import Participant from "@/components/participants";
import Process from "@/components/process";
import TrainingProgram from "@/components/training-program";

export default function Page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Organization />
      <Participant />
      <Benefits />
      <TrainingProgram />
      <Process />
      <ImageGallery />
      <FAQ />
      <Contact />
    </div>
  );
}
