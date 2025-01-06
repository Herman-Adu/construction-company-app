import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import React from "react";

export const Projects = () => {
  const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];
  return (
    <section>
      <Container>
        <SectionName name="Projects" />
        <EmblaCarousel slides={images} />
      </Container>
    </section>
  );
};
