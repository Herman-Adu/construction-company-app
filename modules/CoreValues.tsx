import Image from "next/image";
import React from "react";

export const CoreValues = () => {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((item, index) => {
          const isSecondItem = index === 1;

          return (
            <div
              key={item.title}
              className={`flex flex-col items-center p-8 ${
                isSecondItem && "bg-primary text-black"
              }`}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className={`w-20 h-20 border-2 ${
                    isSecondItem ? "border-black" : "border-white"
                  } rounded-full flex items-center justify-center`}
                >
                  <Image src={item.img} alt="icon" width={34} height={34} />
                </div>
                <h3>{item.title}</h3>
                <p className="max-w-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const data = [
  {
    img: "/excellence.png",
    title: "Excellence",
    description:
      "Committed to superior craftsmanship and attention to detail in every project, ensuring exceptional outcomes that stand the test of time.",
  },
  {
    img: "/innovation.png",
    title: "Innovation",
    description:
      "Embracing cutting-edge technologies and creative solutions to deliver modern efficient and sustainable construction results.",
  },
  {
    img: "/customer.png",
    title: "Customer Focus",
    description:
      "Building strong relationships through clear communication, personalised service, and a relentless dedication to meeting our clients unique needs.",
  },
];
