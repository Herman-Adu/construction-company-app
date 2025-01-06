import { SectionSplit } from "@/components/SectionSplit";
import { AboutUs } from "./modules/AboutUs";
import { CoreValues } from "./modules/CoreValues";
import { Hero } from "./modules/Hero";
import { Service } from "@/modules/Service";
import { Projects } from "@/modules/Projects";
import { Career } from "./modules/Career";
import { ContactUs } from "@/modules/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Service />
        <Projects />
        <Career />
      </SectionSplit>

      <ContactUs />
    </>
  );
}
