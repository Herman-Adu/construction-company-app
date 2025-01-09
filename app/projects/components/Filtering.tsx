"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchParams } from "@/types/routes";

interface FilteringProps {
  years: number[];
  locations: string[];
}

export const Filtering = ({ years, locations }: FilteringProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // destructure naame and value from e.target
    const { name, value } = e.target;

    // construct new params
    const params = new URLSearchParams(searchParams.toString());

    // set params with NEW NAME AND VALUE
    params.set(name, value);

    // Based on filter add new params to the url - http://localhost:3000/projects?year=2016&location=Seattle
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex gap-4 mb-8">
      <select
        name="year"
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.YEAR) as string}
      >
        <option value="">Filter by Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        name="location"
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.LOCATION) as string}
      >
        <option value="">Filter by Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtering;
