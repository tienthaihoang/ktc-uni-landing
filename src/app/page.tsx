import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Organization from "@/components/organization";
import Participant from "@/components/participants";
import Process from "@/components/process";
import TrainingProgram from "@/components/training-program";

export default function Page() {
  return (
    <div>
      <Hero />
      <Participant />
      <AboutUs />
      <Organization />
      {/* <Benefits /> */}
      <TrainingProgram />
      <Process />
      {/* <ImageGallery /> */}
      <FAQ />
      <Contact />
    </div>
  );
}
