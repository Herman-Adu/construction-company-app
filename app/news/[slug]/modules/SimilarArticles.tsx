import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import Link from "next/link";
import React from "react";
import { Article } from "../../components/Article";
import { Route } from "@/types/routes";

interface ArticleProps {
  id: number;
  slug: string;
  title: string;
  images: string[];
  category: string;
  year: number;
}

interface SimilarArticlesProps {
  articles: ArticleProps[];
}

export const SimilarArticles = ({ articles }: SimilarArticlesProps) => {
  return (
    <section>
      <Container>
        <SectionName name="similar articles" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {articles.map((article) => (
            <Link
              href={`${Route.LATEST_NEWS}/${article.slug}`}
              key={article.id}
            >
              <Article {...article} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
