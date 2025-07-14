"use client";

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button onClick={onClick} type="button" className="text-white bg-gray-800  font-medium rounded-sm text-md btn">
            {children}
        </button>

    );
};
