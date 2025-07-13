"use client";

import React, { useState } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogHeader, DialogBody } from "./Dialog";

const HeroSection = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

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
          <Link href="/Himanshu_s_Resume.pdf" target="_blank" passHref>
            <Button type="button">
              View Resume
            </Button>
          </Link>
          <Button type="button" onClick={() => setIsContactDialogOpen(true)}>
            Contact Me
          </Button>
        </div>
      </div>
      <Dialog isOpen={isContactDialogOpen} onClose={() => setIsContactDialogOpen(false)}>
        <DialogHeader title={'Contact Me'} onClose={() => setIsContactDialogOpen(false)} />
        <DialogBody>
          <div className="flex gap-4 items-start">
            <Image
              src="/contact-me.png"
              alt="Contact Me"
              width={128}
              height={128}
              className=""
            />
            <div className="flex flex-col gap-4">
              {/* contact number */}
              <p>Phone: +91 8882856457</p>
              {/* email */}
              <p>Email: himanshunegi378@gmail.com</p>
            </div>

          </div>
        </DialogBody>
      </Dialog>
    </section>
  );
};

export default HeroSection;
