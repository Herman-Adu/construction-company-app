import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";

export const Career = () => {
  return (
    <section>
      <Container>
        <SectionName name="Careers" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4">Join our Team</h2>
            <Image
              src="/worker.jpg"
              alt="worrker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full mb-4 md:hidden"
            />

            <div className="space-y-4 mb-4">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised.
              </p>
              <p>
                n the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words.
              </p>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from &quot;de Finibus Bonorum.
              </p>
            </div>
            <Button />
          </div>

          <div className="relative hidden md:block">
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full"
            />
            <Image
              src="/dots.png"
              alt="dots"
              width={200}
              height={200}
              className="absolute left-0 bottom-0 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
