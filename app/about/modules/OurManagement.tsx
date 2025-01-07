import { SectionName } from "@/components/SectionName";
import React from "react";
import { Card } from "../components/Card";

export const OurManagement = () => {
  return (
    <div>
      <SectionName name=" Our Management" id="our-management" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {managers.map((manager) => (
          <div key={manager.name}>
            <Card {...manager} />
          </div>
        ))}
      </div>
    </div>
  );
};

const managers = [
  {
    image: "/manager1.jpg",
    name: "Action Jackson",
    position: "CEO",
  },
  {
    image: "/manager2.jpg",
    name: "Ian Wright",
    position: "Sales Director",
  },
  {
    image: "/manager3.jpg",
    name: "Alvin Smith",
    position: "Operations Director",
  },
  {
    image: "/manager4.jpg",
    name: "Sarah Adu",
    position: "CTO",
  },
];
