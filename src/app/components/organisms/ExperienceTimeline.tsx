"use client";
import React from "react";
import { Chrono } from "react-chrono";

const experienceData = [
  {
    title: "Nov 2022 - Present",
    cardTitle: "Samta",
    url: "https://samta.ai/",
    cardSubtitle: "SDE",
    cardDetailedText:
      "Building banking application for the global market other than that Managing frontend team on multiple internal and client projects.",
  },
  {
    title: "Mar 2021 - Nov 2022",
    cardTitle: "Blackcoffer",
    url: "https://www.blackcoffer.com/",
    cardSubtitle: "Web Developer",
    cardDetailedText:
      "Working on variety of projects such as website development, backend development and maintenance using React, express, Azure function and various database technologies.",
  },
  {
    title: "Mar 2020 - Sep 2020",
    cardTitle: "Taxvisor",
    url: "https://taxvisor.in/",
    cardSubtitle: "Web Developer",
    cardDetailedText:
      "Worked on redesigning the company website and developing api endpoints for gst filing using React, Nextjs, firebase and SQL.",
  },
  {
    title: "July 2019 - Aug 2019",
    cardTitle: "Shrishti Softech solutions pvt. ltd",
    cardSubtitle: "SEO",
    cardDetailedText:
      "Worked on creating website using weebly and registering them on directory listing.",
  },
];

const ExperienceTimeline = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Chrono
        items={experienceData}
        mode="VERTICAL_ALTERNATING"
        cardHeight={150}
        disableToolbar={true}
        scrollable={false}
        theme={{
          primary: "#1f2937",
          secondary: "var(--color-body-bg)",
          cardBgColor: "var(--color-card-bg)",
          cardForeColor: "#374151",
          titleColor: "#1f2937",
        }}
      />
    </div>
  );
};

export default ExperienceTimeline;
