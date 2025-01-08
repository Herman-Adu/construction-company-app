import { Container } from "@/components/Container";
import React from "react";

export const Achievement = () => {
  return (
    <section>
      <Container>
        <h1 className="mb-8">Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Achievement;
