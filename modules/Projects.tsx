import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import React from "react";

export const Projects = () => {
  const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

  const data = [
    {
      image: "/hero.jpg",
      title: "Project 1",
      link: "/projects/project-1",
    },
    {
      image: "/hero2.jpg",
      title: "Project 2",
      link: "/projects/project-2",
    },
    {
      image: "/hero3.jpg",
      title: "Project 3",
      link: "/projects/project-3",
    },
  ];

  return (
    <section>
      <Container>
        <SectionName name="Projects" />
        <EmblaCarousel slides={data} />
      </Container>
    </section>
  );
};
