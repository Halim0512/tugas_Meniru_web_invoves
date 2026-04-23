import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`rounded-lg shadow-md p-6 bg-white ${className || ""}`}>
      {children}
    </div>
  );
}