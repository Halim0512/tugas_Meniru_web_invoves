import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  isActive,
}) => {
  return (
    <a
      href={href}
      className={`p-2 flex gap-2 items-center transition ${
        isActive
          ? "text-red-900 font-semibold"
          : "text-gray-900 hover:text-red-900"
      }`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;