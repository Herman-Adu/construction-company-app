import { Route } from "@/types/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div>
      <Link href={`${Route.HOME}`}>
        <Image src="/logo2.png" alt="logo" width={40} height={40} />
      </Link>
    </div>
  );
};
