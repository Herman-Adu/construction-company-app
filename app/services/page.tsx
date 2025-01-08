import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import React from "react";
import Achievement from "./modules/Achievement";
import { Services as ServicesSection } from "@/modules/Services";
import { Projects } from "@/modules/Projects";

export default function Services() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Achievement />
        <ServicesSection />
        <Projects />
      </SectionSplit>
    </>
  );
}