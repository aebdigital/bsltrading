import React from "react";

type AnimatedButtonTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedButtonText({ children }: AnimatedButtonTextProps) {
  return (
    <span className="relative flex flex-col overflow-hidden">
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}
