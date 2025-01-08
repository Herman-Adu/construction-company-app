import { ServicePageContent } from "../modules/ServicePageContent";

export default function GeneralContracting() {
  return <ServicePageContent {...data} />;
}

const data = {
  title: "General Contracting",
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
      randomised words which don't look even slightly believable. If you are
      going to use a passage of Lorem Ipsum,
    </>
  ),
};
