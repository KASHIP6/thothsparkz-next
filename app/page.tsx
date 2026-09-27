import type { Metadata } from "next";
import Hero from "@/app/components/sections/Hero";
import Manifesto from "@/app/components/sections/Manifesto";
import Capabilities from "@/app/components/sections/Capabilities";
import Stats from "@/app/components/sections/Stats";
import SelectedWork from "@/app/components/sections/SelectedWork";
import SparkSystem from "@/app/components/sections/SparkSystem";
import TrustedBy from "@/app/components/sections/TrustedBy";
import CTA from "@/app/components/sections/CTA";

export const metadata: Metadata = {
  title: { absolute: "Thoth Sparkz | Intelligence That Sparks Transformation" },
  description:
    "We build brands, digital experiences and growth systems that move businesses forward.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Capabilities />
      <Stats />
      <SelectedWork />
      <SparkSystem />
      <TrustedBy />
      <CTA />
    </>
  );
}
