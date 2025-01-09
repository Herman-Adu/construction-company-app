import React from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { HeroCarousel } from "./HeroCarousel";
import Badge from "@/modules/Badge";
import { Route } from "@/types/routes";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div />

        <div>
          <Badge />

          <h1 className="my-4">
            WE BUILD WITH <br />
            <span className="text-primary">PRECISION</span>
          </h1>

          <p className="mb-8 md:max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it.
          </p>

          <Button />
        </div>

        <div>
          <Link
            href={`${Route.HOME}`}
            className="inline-block rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce"
          >
            <FaArrowDown size="24" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
