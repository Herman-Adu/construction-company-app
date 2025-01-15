import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { CompanyHistory } from "./modules/CompanyHistory";
import { OurEmployees } from "./modules/OurEmployees";
import { OurManagement } from "./modules/OurManagement";
import { OurVision } from "./modules/OurVision";
import { Certificates } from "./modules/Certificates";
import Link from "next/link";
import { CoreValues } from "../../modules/CoreValues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Come and find out who we are what we do and why we and how wwed provide construction services. Meet us aand meet the team",
};

export default function About() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container>
          <h1 className="mb-8">About Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 relative min-h-screen">
            <div className="space-y-8">
              <CompanyHistory />
              <OurEmployees />
              <OurManagement />
              <OurVision />
              <Certificates />
            </div>

            <div className="relative">
              <div className="sticky top-16">
                <ul className="hidden md:block space-y-2">
                  {links.map((link) => (
                    <li key={link.id} className="flex items-center gap-2">
                      <span className="w-8 h-1 bg-primary" />

                      <Link href={link.href} className="underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionSplit>
      <CoreValues />
    </>
  );
}

const links = [
  {
    id: 1,
    href: "#company-history",
    text: "Company History",
  },
  {
    id: 2,
    href: "#our-employees",
    text: "Employees",
  },
  {
    id: 3,
    href: "#our-management",
    text: "Management",
  },
  {
    id: 4,
    href: "#our-vision",
    text: "Vision",
  },
  {
    id: 5,
    href: "#certificates",
    text: "Certificates",
  },
];
