import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { articles } from "../page";
import { ArticleSingle } from "./modules/ArticleSingle";
import { SimilarArticles } from "./modules/SimilarArticles";

export default function Article({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params.slug);

  const article = articles.find((article) => article.id === Number(article.id));

  const similarArticles = articles
    .filter((p) => p.category === article?.category && p.id !== article.id)
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
