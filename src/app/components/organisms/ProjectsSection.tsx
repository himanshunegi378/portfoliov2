import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const ProjectsSection = () => {
  // Sample projects data
  const projects = [
    {
      id: 3,
      title: "ExpenseLM",
      description:
        "Trying out intersection of expense logging and AI. Implemented a small feature where category is predicted based on the expense",
      techTags: ["Next.js", "TypeScript", "AI"],
      liveDemoUrl: "https://www.expenselm.timercards.com/",
      githubUrl: "https://github.com/himanshunegi378/expenselm",
    },
    {
      id: 1,
      title: "AddonAI",
      description:
        "Trying out an approach to create tools as addons that user can install from the app store. Just like chrome extensions. Also heavliy AI generated, I myself don't know what is going on",
      imageSrc: "/addon-ai.png",
      techTags: ["React", "Next.js", "TypeScript", "AI"],
      liveDemoUrl: "https://www.addonlm.timercards.com/",
      githubUrl: "https://github.com/himanshunegi378/AddonLM",
    },
    {
      id: 2,
      title: "TimerCards",
      description:
        "Created this to around the idea of chaining multiple countdown timers. so when one timer ends, the next one starts automatically.",
      imageSrc: "https://cdn.dribbble.com/users/7262166/screenshots/15265516/media/c0192a9caad7f1f2dce0a723468c841e.png?compress=1&resize=800x600",
      techTags: ["React", "TypeScript"],
      liveDemoUrl: "https://timercards.com/",
      githubUrl: "https://github.com/himanshunegi378/TimerCards",
    },
  ];

  return (
    <section id="projects" className="bg-[var(--color-body-bg)]">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              imageSrc={project.imageSrc}
              techTags={project.techTags}
              liveDemoUrl={project.liveDemoUrl}
              githubUrl={project.githubUrl}
              key={project.id}
              title={project.title}
              description={project.description}
              className="p-4"
            ></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
