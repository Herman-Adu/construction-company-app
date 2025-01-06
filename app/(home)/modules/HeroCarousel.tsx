"use client";

import { Overlay } from "@/components/Overlay";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"];

export const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {images.flatMap((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={img}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>

      <Overlay />
      <div className="absolute right-4 bottom-4 z-50">
        <div className="flex gap-2">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => handleImageChange(index)}
              className={` w-12 h-2 rounded-full transition-all duration-300 shadow-lg ${
                currentImageIndex === index
                  ? "bg-primary"
                  : "bg-white hover:bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};
