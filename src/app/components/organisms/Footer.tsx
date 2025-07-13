import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        © {new Date().getFullYear()} Himanshu Negi. Built with 💙 using React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
