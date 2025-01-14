"use client";

import { Route } from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinksProps {
  toggleLogoNav?: (() => void | undefined) | undefined;
}

export const Logo = ({ toggleLogoNav }: LinksProps) => {
  return (
    <div>
      <Link
        href={`${Route.HOME}`}
        onClick={() => toggleLogoNav && toggleLogoNav()}
      >
        <Image src="/logo2.png" alt="logo" width={40} height={40} />
      </Link>
    </div>
  );
};
