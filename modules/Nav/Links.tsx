import { Route, SearchParams } from "@/types/routes";
import Link from "next/link";
import React from "react";
import {
  GrArticle,
  GrInfo,
  GrPhone,
  GrProjects,
  GrServices,
} from "react-icons/gr";

interface LinksProps {
  handleLinkClick?: () => void;
  toggleMobileNav?: (() => void | undefined) | undefined;
}

export const Links = ({ handleLinkClick }: LinksProps) => {
  return (
    <ul className="space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row md:flex">
      {links.map((link) => (
        <li key={link.text}>
          <Link
            onClick={handleLinkClick}
            href={link.href}
            className="flex items-center gap-2 hover:text-primary text-xl font-medium"
          >
            <link.icon size="14" className="text-primary" />
            <p>{link.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const MobileLinks = ({ toggleMobileNav }: LinksProps) => {
  return (
    <ul className="space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row md:flex">
      {links.map((link) => (
        <li key={link.text}>
          <Link
            onClick={() => toggleMobileNav && toggleMobileNav()}
            href={link.href}
            className="flex items-center gap-2 text-gray-600 hover:text-primary text-xl font-medium"
          >
            <link.icon size="14" className="text-primary" />
            <p className="">{link.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const links = [
  {
    href: Route.ABOUT,
    text: "About us",
    icon: GrInfo,
  },
  {
    href: Route.SERVICES,
    text: "Services",
    icon: GrServices,
  },
  {
    href: `${Route.PROJECTS}?${SearchParams.PAGE}=1&${SearchParams.PER_PAGE}=6`,
    text: "Our Work",
    icon: GrProjects,
  },
  {
    href: `${Route.LATEST_NEWS}?${SearchParams.PAGE}=1&${SearchParams.PER_PAGE}=6`,
    text: "Latest News",
    icon: GrArticle,
  },
  {
    href: Route.CONTACT,
    text: "Contact us",
    icon: GrPhone,
  },
];
