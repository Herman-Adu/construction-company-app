import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { Projects } from "@/modules/Projects";
import { Route } from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ServicePageContentProps {
  title: string;
  subtitle: string;
  description: string | ReactNode;
  image: string;
}

export const ServicePageContent = ({
  title,
  subtitle,
  description,
  image,
}: ServicePageContentProps) => {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h2 className="mb-8">{title}</h2>

          <p className="mb-8">{subtitle}</p>

          <div className="grid gird-cols-1 md:grid-cols-[0.35fr_0.65fr] bg-white">
            <div className="relative h-96 md:h-full">
              <Image
                src={image}
                alt="service image"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-12">
              <p className="mb-4">{description}</p>

              <Link href={`${Route.PROJECTS}`}>
                <Button>View Projects</Button>
              </Link>
            </div>
          </div>
        </Container>

        <Projects />
      </SectionSplit>
    </>
  );
};
