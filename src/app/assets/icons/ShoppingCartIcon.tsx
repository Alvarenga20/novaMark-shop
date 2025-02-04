import React from "react";

interface IconProps {
  className?: string;
}

const ShoppingCartIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l3.6 7.2 1.35 2.7L11 18h6l2-7h4M6 6h4m0 0H6z"
      />
    </svg>
  );
};

export default ShoppingCartIcon;