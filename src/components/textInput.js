import React from "react";
import { motion } from "framer-motion";

export default function TextInput({
    value, 
    onChange, 
    placeholder, 
    type = "text", 
    variant = "default", 
    size = "md", 
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    disabled = false,
    error = false,
    helpertext,
    label
}) {
    const variantStyles = {
        default: `bg-white text-gray-900 rounded-lg 
            border border-gray-300
            focus-within:border-2 focus-within:-m-[0px] focus-within:border-blue-500
            
            transition-colors`,
        filled: `bg-white text-gray-900 rounded-lg 
            border border-transparent
            focus-within:border-2 focus-within:-m-[0px] focus-within:border-blue-500
            
            transition-colors`,
    };

    const sizeStyles = {
        sm: "h-9 text-sm",
        md: "h-10 text-base",
        lg: "h-11 text-lg",
    };

    const containerClassName = `
        relative flex items-center transition-all duration-200
        ${variantStyles[variant]} 
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''}
        ${error ? 'border-2 border-red-500' : ''}
    `;

    const inputClassName = `
        w-full h-full focus:outline-none bg-transparent
        ${LeadingIcon ? "pl-10" : "pl-4"}
        ${TrailingIcon ? "pr-10" : "pr-4"}
        ${disabled ? 'cursor-not-allowed' : ''}
    `;

    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm text-gray-500">{label}</label>
            )}
            
            <motion.div 
                className={containerClassName}
                whileTap={!disabled && { scale: 1 }}
            >
                {/* Leading Icon */}
                {LeadingIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <LeadingIcon size={20} />
                    </div>
                )}

                {/* Input */}
                <input 
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputClassName}
                    disabled={disabled}
                />

                {/* Trailing Icon */}
                {TrailingIcon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <TrailingIcon size={20} />
                    </div>
                )}
            </motion.div>

            {/* Helper Text - now outside the input container */}
            {helpertext && (
                <p className="text-sm text-gray-500">
                    {helpertext}
                </p>
            )}
        </div>
    );
}