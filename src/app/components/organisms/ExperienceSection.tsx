'use client'
import Heading from "../atoms/Heading";
import dynamic from "next/dynamic";
const ExperienceTimeline = dynamic(
  () => import("../organisms/ExperienceTimeline"),
  {
    ssr: false, // Prevents server-side rendering issues with react-chrono
  }
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="">
      <ExperienceTimeline />
    </section>
  );
};

export default ExperienceSection;
