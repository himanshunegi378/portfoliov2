"use client";

import Image from "next/image";
import React from "react";

interface FunFactProps {
  imageSrc: string;
  imageAlt: string;
  funFacts: {
    icon: string;
    label: string;
    value: string;
  }[];
  // Optional prop to control the overlap in pixels.
  stickyNoteOffset?: number;
}

const FunFact: React.FC<FunFactProps> = ({
  imageSrc,
  imageAlt,
  funFacts,
  stickyNoteOffset = 144, // default overlap offset
}) => {
  return (
    <div className="relative">
      {/* Sticky Note Card in normal flow */}
      <div className="skewed-card relative bg-yellow-100 p-4 rounded-lg shadow-md z-10 w-full max-w-[21rem] mx-auto">
        <div className="w-full ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="responsive"
            width={814}
            height={835}
            objectFit="contain"
          />
        </div>
      </div>

      {/* Base Card pulled up via negative margin */}
      <div className="base-card bg-white rounded-xl shadow-lg p-4 relative z-0">
        <div className="w-full h-[178.8px] rounded-lg object-cover mb-4 bg-blue-200"></div>
        <h2 className="text-2xl font-bold mb-4">Fun Facts:</h2>
        <ul className="space-y-2">
          {funFacts.map((funFact) => (
            <li key={funFact.label}>
              {funFact.icon}{" "}
              <span className="font-medium">{funFact.label}:</span>{" "}
              {funFact.value}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .skewed-card {
          transform: rotate(-3deg) translateX(-5px);
          transform-origin: top left;
        }
        .base-card {
          margin-top: -${stickyNoteOffset}px;
        }

        @media (min-width: 1024px) {
          .skewed-card {
            position: absolute;
            margin: 0 auto;
            top: -${stickyNoteOffset}px;
            left: 50%;
            transform: rotate(-3deg) translateX(-50%);
          }

          .base-card {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FunFact;
