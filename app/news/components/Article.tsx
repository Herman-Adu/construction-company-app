import Image from "next/image";
import React from "react";
import { LabelWithIcon } from "./LabelWithIcon";

interface ArticleProps {
  title: string;
  year: number;
  category: string;
  images: string[];
  slug: string;
}

export const Article = ({
  title,
  year,
  category,
  images,
  slug,
}: ArticleProps) => {
  return (
    <div>
      <div className="relative h-56 w-full transform transition-transform hover:scale-105 hover:opacity-70">
        <Image
          src={images[0]}
          alt="article image"
          fill
          className="object-cover"
        />

        <div className="absolute bottom-1 right-1 gap-1">
          <div className="flex gap-1">
            <LabelWithIcon
              text={category}
              alt="location"
              icon="/location.png"
            />

            <LabelWithIcon text={year} alt="calendar" icon="/calendar.png" />
          </div>
        </div>
      </div>
      <p className="mt-2 font-semibold">{title}</p>
    </div>
  );
};
