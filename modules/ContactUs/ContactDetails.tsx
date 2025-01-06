import Image from "next/image";
import React from "react";
import Award from "@/public/award.png";
import Badge from "../Badge";

export const ContactDetails = () => {
  return (
    <div>
      <div className="relative w-24 h-24">
        <Image
          src={Award}
          alt="award"
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h2 className="my-4">Contact Us</h2>

      <p className="text-lg mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        <br />
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
        <br />
        <br />
        Also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s.
      </p>

      <Badge />
    </div>
  );
};
