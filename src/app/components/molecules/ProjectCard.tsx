'use client';

import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  children?: React.ReactNode;
  techTags?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  children,
  techTags,
  liveDemoUrl,
  githubUrl,
  className = "",
}) => {

  return (
    <div
      className={`flex flex-col bg-[var(--color-card-bg)] rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-sm transition-transform duration-300 ease-in-out ${className}`}
    >
      <Image
        src={imageSrc ?? "https://placehold.co/800x600?text=Project+Image&font=roboto"}
        alt="Project Preview"
        width={800}
        height={600}
        className="rounded-lg object-cover mb-4 aspect-[4/3]"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-3xl font-semibold text-gray-800 mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 mb-4 leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techTags?.map((tag) => (
            <span
              key={tag}
              className="bg-[var(--color-tag-bg)] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
         {liveDemoUrl && <Link href={liveDemoUrl} target="_blank" passHref>
            <Button onClick={() => {}}>Live Demo</Button>
          </Link>}
          {githubUrl && <Link href={githubUrl} target="_blank" passHref>
            <Button onClick={() => {}}>GitHub</Button>
          </Link>}
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
