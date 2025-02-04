import React from "react";

interface IconProps {
    className?: string;
  }

const ArrowRightIcon: React.FC<IconProps> = ({ className }) => {
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
        d="M12 19l7-7-7-7M5 12h14"
      />
    </svg>
  );
};

export default ArrowRightIcon;