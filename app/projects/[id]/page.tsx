import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { projects } from "../page";
import { ProjectSingle } from "./modules/ProjectSingle";

export default function Work({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === Number(params.id));
  return (
    <>
      <Banner />

      <SectionSplit>{project && <ProjectSingle {...project} />}</SectionSplit>
    </>
  );
}
