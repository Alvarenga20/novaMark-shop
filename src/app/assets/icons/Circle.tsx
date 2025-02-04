import React from "react";

interface CircleProps {
  className?: string;
  radius: number;
  fillLight: string; 
  fillDark: string;
}

const Circle: React.FC<CircleProps> = ({ className, radius, fillLight, fillDark }) => {
  return (
    <svg
      className={`${className} transition-colors duration-500`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        fill={fillLight} 
        className={`dark:fill-[${fillDark}]`} 
      />
    </svg>
  );
};

export default Circle;
