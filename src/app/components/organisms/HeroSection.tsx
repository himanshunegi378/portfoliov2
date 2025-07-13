"use client";

import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#f9f1e5",
      }}
    >
      <div className="text-center relative">
        <Image
          src={"/greeting.png"}
          alt="Greeting"
          width={1024}
          height={1024}
          className="max-w-sm absolute"
          style={{
            left: "-170px",
            top: "-130px",
            transform: "rotate(-18deg)",
          }}
        />
        <Image
          src={"/profileImage.jpg"}
          alt="Profile"
          width={460}
          height={460}
          className="w-52 h-52 rounded-full mx-auto mb-4"
        />
        <Text className="text-lg mb-6">
          Front-End Developer & UI Enthusiast crafting engaging digital
          experiences.
        </Text>
        <div className="space-x-4">
          <Button type="button" onClick={() => {}}>
            View Resume
          </Button>
          <Button type="button" onClick={() => {}}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
