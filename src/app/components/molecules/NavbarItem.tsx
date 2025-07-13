import React from 'react';

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="text-gray-800 hover:text-blue-500 px-3 py-2">
      {label}
    </a>
  );
};

export default NavbarItem;
