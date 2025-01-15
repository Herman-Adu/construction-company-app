import { SectionSplit } from "@/components/SectionSplit";
import { AboutUs } from "./modules/AboutUs";
import { CoreValues } from "../../modules/CoreValues";
import { Hero } from "./modules/Hero";
import { Services } from "@/modules/Services";
import { Projects } from "@/modules/Projects";
import { Career } from "./modules/Career";
import { ContactUs } from "@/modules/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
        <Projects />
        <Career />
      </SectionSplit>

      <ContactUs />
    </>
  );
}
