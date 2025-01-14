import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { Article } from "./components/Article";
import Filtering from "./components/Filtering";
import { Route, SearchParams } from "@/types/routes";
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
  const totalPages = Math.ceil(articles.length / Number(perPage));

  // get the year each article was completed
  const years = articles.map((article) => article.year);

  // get all categories for articles
  const categories = articles.map((article) => article.category);

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    // get year and location from search params
    const year = searchParams[SearchParams.YEAR];
    const category = searchParams[SearchParams.CATEGORY];

    if (year && category) {
      return article.year == Number(year) && article.category == category;
    } else if (year) {
      return article.year == Number(year);
    } else if (category) {
      return article.category == category;
    } else {
      return true;
    }
  });

  // Paginated articles
  const paginatedArticles = filteredArticles.slice(start, end);

  //
  const isPaginationVisible = filteredArticles.length > Number(perPage);

  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-4">Latest News</h1>
          <Filtering years={years} categories={categories} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {paginatedArticles.map((article) => {
              return (
                <Link
                  href={`${Route.LATEST_NEWS}/${article.slug}`}
                  key={article.title}
                >
                  <Article {...article} />
                </Link>
              );
            })}
          </div>
          {isPaginationVisible && (
            <PaginationControl
              page={page}
              perPage={perPage}
              hasNextPage={articles.length > end}
              hasPrevPage={start > 0}
              totalPages={totalPages}
            />
          )}
        </Container>
      </SectionSplit>
    </>
  );
}

export const articles = [
  {
    id: 1,
    slug: "article-1",
    title: "article 1",
    year: 2021,
    location: "New York",
    category: "category 1",
    images: ["/hero.jpg"],
    description:
      "A cutting-edge architectural article located in the heart of New York, combining modern design with sustainable elements.",
  },
  {
    id: 2,
    slug: "article-2",
    title: "article 2",
    year: 2020,
    location: "Los Angeles",
    category: "category 2",
    images: ["/hero2.jpg"],
    description:
      "An innovative residential development in Los Angeles, featuring sleek, minimalist designs and energy-efficient features.",
  },
  {
    id: 3,
    slug: "article-3",
    title: "article 3",
    year: 2019,
    location: "Chicago",
    category: "category 3",
    images: ["/hero3.jpg"],
    description:
      "A contemporary office building in Chicago that integrates smart technologies and open-plan layouts to foster collaboration.",
  },
  {
    id: 4,
    slug: "article-4",
    title: "article 4",
    year: 2018,
    location: "Miami",
    category: "category 4",
    images: ["/hero.jpg"],
    description:
      "A luxurious beachfront property in Miami, designed to offer stunning views and top-tier amenities.",
  },
  {
    id: 5,
    slug: "article-5",
    title: "article 5",
    year: 2017,
    location: "San Francisco",
    category: "category 5",
    images: ["/hero2.jpg"],
    description:
      "A mixed-use development in San Francisco, blending residential and commercial spaces for a vibrant urban experience.",
  },
  {
    id: 6,
    slug: "article-6",
    title: "article 6",
    year: 2016,
    location: "Seattle",
    category: "category 6",
    images: ["/hero3.jpg"],
    description:
      "A high-tech industrial complex in Seattle, emphasizing innovation and sustainability through eco-friendly materials.",
  },
  {
    id: 7,
    slug: "article-7",
    title: "article 7",
    year: 2021,
    location: "New York",
    category: "category 1",
    images: ["/hero.jpg"],
    description:
      "A modern skyscraper in New York, setting new standards for green building practices in urban settings.",
  },
  {
    id: 8,
    slug: "article-8",
    title: "article 8",
    year: 2020,
    location: "Los Angeles",
    category: "category 2",
    images: ["/hero2.jpg"],
    description:
      "A cutting-edge cultural center in Los Angeles, blending art and technology to create immersive experiences.",
  },
  {
    id: 9,
    slug: "article-9",
    title: "article 9",
    year: 2019,
    location: "Chicago",
    category: "category 3",
    images: ["/hero3.jpg"],
    description:
      "A state-of-the-art healthcare facility in Chicago, designed for patient comfort and medical excellence.",
  },
  {
    id: 10,
    slug: "article-10",
    title: "article 10",
    year: 2018,
    location: "Miami",
    category: "category 4",
    images: ["/hero.jpg"],
    description:
      "An iconic waterfront hotel in Miami, offering world-class service and breathtaking ocean views.",
  },
  {
    id: 11,
    slug: "article-11",
    title: "article 11",
    year: 2017,
    location: "San Francisco",
    category: "category 5",
    images: ["/hero2.jpg"],
    description:
      "A sustainable office park in San Francisco, featuring green roofs and energy-efficient architecture.",
  },
  {
    id: 12,
    slug: "article-12",
    title: "article 12",
    year: 2016,
    location: "Seattle",
    category: "category 6",
    images: ["/hero3.jpg"],
    description:
      "An innovative tech campus in Seattle, with state-of-the-art facilities designed for future-focused businesses.",
  },
];
