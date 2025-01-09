import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { Project } from "./components/Project";
import Filtering from "./components/Filtering";
import { SearchParams } from "@/types/routes";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // get the year each project was completed
  const years = projects.map((project) => project.year);

  // get all location projects were completed
  const locations = projects.map((project) => project.location);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const year = searchParams[SearchParams.YEAR];
    const location = searchParams[SearchParams.LOCATION];

    if (year && location) {
      return project.year == Number(year) && project.location == location;
    } else if (year) {
      return project.year == Number(year);
    } else if (location) {
      return project.location == location;
    }
  });

  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>
          <Filtering years={years} locations={locations} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {filteredProjects.map((project) => {
              return (
                <Link href={`/projects/${project.id}`} key={project.title}>
                  <Project {...project} />
                </Link>
              );
            })}
          </div>
        </Container>
      </SectionSplit>
    </>
  );
}

const projects = [
  {
    id: 1,
    title: "project 1",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
  },
  {
    id: 2,
    title: "project 2",
    year: 2020,
    location: "Los Angeles",
    images: ["/hero2.jpg"],
  },
  {
    id: 3,
    title: "project 3",
    year: 2019,
    location: "Chicago",
    images: ["/hero3.jpg"],
  },
  {
    id: 4,
    title: "project 4",
    year: 2018,
    location: "Miami",
    images: ["/hero.jpg"],
  },
  {
    id: 5,
    title: "project 5",
    year: 2017,
    location: "San Francisco",
    images: ["/hero2.jpg"],
  },
  {
    id: 6,
    title: "project 6",
    year: 2016,
    location: "Seattle",
    images: ["/hero3.jpg"],
  },
];
