import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill="#0B1B3D" />
      
      {/* Back Orbit (Top Right) */}
      <g transform="rotate(-30 50 50)">
        <path
          d="M 8 50 A 42 16 0 0 1 92 50"
          stroke="#34D399"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.8"
        />
      </g>

      {/* User's Original Logo Image cropped into a circle */}
      <clipPath id="logoClip">
        <circle cx="50" cy="50" r="34" />
      </clipPath>
      
      {/* Background for image just in case it's transparent */}
      <circle cx="50" cy="50" r="34" fill="white" />
      
      <image
        href="/images/logo.jpg"
        x="16"
        y="16"
        height="68"
        width="68"
        clipPath="url(#logoClip)"
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Front Orbit (Bottom Left) */}
      <g transform="rotate(-30 50 50)">
        <path
          d="M 92 50 A 42 16 0 0 1 8 50"
          stroke="#34D399"
          strokeWidth="2.5"
          fill="none"
        />
      </g>
    </svg>
  );
};
