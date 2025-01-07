import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";
import { Card } from "../components/Card";

export const OurEmployees = () => {
  return (
    <div>
      <SectionName name="our emloyees" id="our-employees" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people.map((person) => (
          <div key={person.name}>
            <Card {...person} />
          </div>
        ))}
      </div>
    </div>
  );
};

const people = [
  {
    image: "/person1.jpg",
    name: "Alice Smith",
    position: "Sales Manager",
  },
  {
    image: "/person2.jpg",
    name: "Bob Johnson",
    position: "Sales Manager",
  },
  {
    image: "/person3.jpg",
    name: "Charlie Brown",
    position: "Operations Manager",
  },
  {
    image: "/person4.jpg",
    name: "Daisy Lee",
    position: "HR Manager",
  },
];
