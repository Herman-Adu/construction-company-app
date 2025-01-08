//import Map from "@/components/Map";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

import { Banner } from "@/modules/Banner";
import { ContactUs } from "@/modules/ContactUs";
import React from "react";

export default function Contact() {
  return (
    <>
      <Banner />
      <ContactUs />
      <Map />
    </>
  );
}
