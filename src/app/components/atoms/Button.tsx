'use client';

import React, { ReactNode, MouseEventHandler } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const buttonVariants = cva(
  "color-button-bg text-white font-semibold py-2 px-4 rounded-xl transition duration-200 ease-in-out cursor-pointer",
  {
    variants: {
      intent: {
        primary:
          "",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(buttonVariants({ intent: "primary" }), className)}
  >
    {children}
  </button>
);

export default Button;
