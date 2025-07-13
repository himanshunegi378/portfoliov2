import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className = '' }: TextProps) => {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
};

export default Text;
