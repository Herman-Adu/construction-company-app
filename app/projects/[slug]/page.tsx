import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { projects } from "../page";
import { ProjectSingle } from "./modules/ProjectSingle";
import { SimilarProjects } from "./modules/SimilarProjects";

export default function Work({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug);

  const similarProjects = projects
    .filter((p) => p.location === project?.location && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Banner />

      <SectionSplit>
        {project && <ProjectSingle {...project} />}
        {similarProjects.length > 0 && (
          <SimilarProjects projects={similarProjects} />
        )}
      </SectionSplit>
    </>
  );
}
