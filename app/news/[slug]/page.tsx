import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { articles } from "../page";
import { ArticleSingle } from "./modules/ArticleSingle";
import { SimilarArticles } from "./modules/SimilarArticles";

export default function Work({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug);

  const similarArticles = articles
    .filter((p) => p.location === article?.location && p.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <Banner />

      <SectionSplit>
        {article && <ArticleSingle {...article} />}
        {similarArticles.length > 0 && (
          <SimilarArticles articles={similarArticles} />
        )}
      </SectionSplit>
    </>
  );
}
