"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  // replace - wih a space in service name
  paths.forEach((path, index) => {
    paths[index] = path.replace(/-/g, " ");
  });

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>

        {paths.map((path, index) => {
          // takes the paths array and it slies the correct path by using the index
          // then it just joins it with a slash so it is a proper link
          const href = `/${paths.slice(0, index + 1).join("/")}`;

          // check if we are at the last path in array
          const isLast = index === paths.length - 1;

          //  modify our path to set the first letter in eact path to be uppercase
          path = path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={path}>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>

                {isLast ? (
                  <span className="text-white font-medium">{path}</span>
                ) : (
                  <Link href={href} className="text-white">
                    {path}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
