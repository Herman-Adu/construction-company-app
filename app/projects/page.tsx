import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { Project } from "./components/Project";
import Filtering from "./components/Filtering";
import { SearchParams } from "@/types/routes";
import { PaginationControl } from "./components/PaginationControl";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get the page and per page from search params
  // page will be the enumber of the page
  const page = searchParams[SearchParams.PAGE] ?? "1";

  // perPage shows how many we want to see per page
  const perPage = searchParams[SearchParams.PER_PAGE] ?? "6";

  // Get the start number for when we are going to start slicing the array
  const start = (Number(page) - 1) * Number(perPage);

  // Get the end number for when we are going to end slicing the array
  const end = start + Number(perPage);

  // Total pages
  const totalPages = Math.ceil(projects.length / Number(perPage));

  // get the year each project was completed
  const years = projects.map((project) => project.year);

  // get all location projects were completed
  const locations = projects.map((project) => project.location);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    // get year and location from search params
    const year = searchParams[SearchParams.YEAR];
    const location = searchParams[SearchParams.LOCATION];

    if (year && location) {
      return project.year == Number(year) && project.location == location;
    } else if (year) {
      return project.year == Number(year);
    } else if (location) {
      return project.location == location;
    } else {
      return true;
    }
  });

  // Paginated projects
  const paginatedProjects = filteredProjects.slice(start, end);

  //
  const isPaginationVisible = filteredProjects.length > Number(perPage);

  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Our Work</h1>
          <Filtering years={years} locations={locations} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {paginatedProjects.map((project) => {
              return (
                <Link href={`/projects/${project.id}`} key={project.title}>
                  <Project {...project} />
                </Link>
              );
            })}
          </div>
          {isPaginationVisible && (
            <PaginationControl
              page={page}
              perPage={perPage}
              hasNextPage={projects.length > end}
              hasPrevPage={start > 0}
              totalPages={totalPages}
            />
          )}
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
  {
    id: 7,
    title: "project 7",
    year: 2021,
    location: "New York",
    images: ["/hero.jpg"],
  },
  {
    id: 8,
    title: "project 8",
    year: 2020,
    location: "Los Angeles",
    images: ["/hero2.jpg"],
  },
  {
    id: 9,
    title: "project 9",
    year: 2019,
    location: "Chicago",
    images: ["/hero3.jpg"],
  },
  {
    id: 10,
    title: "project 10",
    year: 2018,
    location: "Miami",
    images: ["/hero.jpg"],
  },
  {
    id: 11,
    title: "project 11",
    year: 2017,
    location: "San Francisco",
    images: ["/hero2.jpg"],
  },
  {
    id: 12,
    title: "project 12",
    year: 2016,
    location: "Seattle",
    images: ["/hero3.jpg"],
  },
];
