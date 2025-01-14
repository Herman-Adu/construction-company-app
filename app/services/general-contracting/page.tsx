import { ServicePageContent } from "../modules/ServicePageContent";

export default function GeneralContracting() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "GENERAL CONTRACTING",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  image: "/hero.jpg",
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
