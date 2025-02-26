"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  color?: "primary" | "secondary" | "danger" | "success";
  variant?: "contained" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  color = "primary",
  variant = "contained",
  size = "md",
  icon,
  className = "",
  href = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-lg transition gap-2";

  const colorClasses = {
    primary: "bg-[#ffb200] text-white hover:bg-yellow-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  const outlinedClasses = {
    primary:
      "border border-[#ffb200] text-[#ffb200] hover:bg-[#ffb200] hover:text-white",
    secondary: "border border-gray-600 text-gray-600 hover:bg-gray-50",
    danger: "border border-red-600 text-red-600 hover:bg-red-50",
    success: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const textClasses = {
    primary: "text-blue-600 hover:bg-blue-50",
    secondary: "text-gray-600 hover:bg-gray-50",
    danger: "text-red-600 hover:bg-red-50",
    success: "text-green-600 hover:bg-green-50",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  let finalClasses = `${baseStyles} ${sizeClasses[size]} ${className}`;

  if (variant === "contained") {
    finalClasses += ` ${colorClasses[color]}`;
  } else if (variant === "outlined") {
    finalClasses += ` ${outlinedClasses[color]} bg-transparent`;
  } else if (variant === "text") {
    finalClasses += ` ${textClasses[color]}`;
  }

  if (loading) {
    finalClasses += " opacity-50 cursor-not-allowed";
  }

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {loading ? "Loading..." : children}
        {icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={finalClasses} disabled={loading} {...props}>
      {loading ? "Loading..." : children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
