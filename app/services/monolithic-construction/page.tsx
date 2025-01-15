import { ServicePageContent } from "../modules/ServicePageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monolithic construction",
};

export default function MonolithicConstruction() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "MONOLITHIC CONSTRUCTION",
  subtitle:
    "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  image: "/hero2.jpg",
  description: (
    <>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
      <br />
      <br />
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don&apos;t look even slightly believable. If you
      are going to use a passage of Lorem Ipsum,
    </>
  ),
};
