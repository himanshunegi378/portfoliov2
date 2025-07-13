import Image from "next/image";
import HeroSection from "./components/organisms/HeroSection";
import ProjectsSection from "./components/organisms/ProjectsSection";
import FunFact from "./components/molecules/FunFact";
import Heading from "./components/atoms/Heading";
import ExperienceSection from "./components/organisms/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex bg-[var(--color-body-bg)] container mx-auto mb-12">
        <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
          {/* First Row: Full Width */}
          <div className="row-span-1">
            <Heading level={2} className="text-3xl text-left">
              <Image
                src="/rocket.png"
                alt="Rocket"
                className="inline-block w-12 mr-2"
                width={240}
                height={240}
              />
              Things I've Built
            </Heading>
          </div>

          {/* Second Row: Two Columns */}
          <div className="grid grid-cols-3 gap-4 row-span-1">
            <div className="col-span-2">
              <ProjectsSection />
            </div>
            <div className="col-span-1">
              <FunFact
                imageSrc="/bug-agent.png"
                imageAlt="Bug Agent"
                funFacts={[
                  {
                    icon: "🛠️",
                    label: "Favorite Tech",
                    value: "React & Tailwind",
                  },
                  { icon: "☕", label: "Fuel", value: "Black Coffee" },
                  { icon: "🎮", label: "Off-duty", value: "Gaming & Anime" },
                  {
                    icon: "💡",
                    label: "Currently learning",
                    value: "Typescript",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[var(--color-body-bg)] container mx-auto">
        <div className="grid grid-rows-[auto_1fr] gap-4 p-4 w-full">
          {/* First Row: Full Width */}
          <div className="row-span-1">
            <Heading level={2} className="text-3xl text-left">
              <Image
                src="/rocket.png"
                alt="Rocket"
                className="inline-block w-12 mr-2"
                width={240}
                height={240}
              />
              Work Timeline
            </Heading>
          </div>
          <div className="col-span-1">
            <ExperienceSection />
          </div>
        </div>
      </div>
    </main>
  );
}
