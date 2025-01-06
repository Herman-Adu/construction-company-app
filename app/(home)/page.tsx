import { SectionSplit } from "@/components/SectionSplit";
import { AboutUs } from "./modules/AboutUs";
import { CoreValues } from "./modules/CoreValues";
import { Hero } from "./modules/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
      </SectionSplit>
    </>
  );
}
