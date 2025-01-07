import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";

export const Certificates = () => {
  return (
    <div>
      <SectionName name="certificates" id="certificates" />

      <p className="mb-4">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex justify-center items-center">
          <Image
            src="/certificate.jpg"
            alt="certificate"
            width={160}
            height={160}
            className="rounded-full overflow-hidden"
          />
        </div>

        <div>
          <Image
            src="/certificate2.png"
            alt="certificate"
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};
