import { useState } from "react";

export default function Button({
    children, 
    onClick, 
    variant = "primary", 
    size = "md", 
    disabled = false
}) {
    // Rename these objects to avoid naming conflicts with props
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
        tonal: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
        ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
        link: "bg-transparent text-blue-600 hover:underline"
    };

    const sizeStyles = {
        xs: "px-2 py-1 text-xs",
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
   
    const className = `rounded-lg ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    } transition-colors duration-200`;

    return (
        <button 
            onClick={onClick} 
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    );
}