import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="px-16 p-4 bg-primary text-white text-xl w-full md:w-auto">
      {children ? children : <Link href="/">Contact Us</Link>}
    </button>
  );
};

//TODO: Change button link
