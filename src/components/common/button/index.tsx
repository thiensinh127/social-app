import type { ReactNode } from "react"
import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined" | "text"
  color?: "primary" | "secondary" | "danger"
  size?: "sm" | "md" | "lg"
  type?: "button" | "submit" | "reset"
  classes?: React.ComponentProps<"button">["className"]
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  children: ReactNode
  onClick?: () => void
  borderRadius?: "none" | "lg" | "full" | number
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  color = "primary",
  size = "md",
  type = "button",
  classes = "",
  href = "",
  fullWidth = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  children,
  onClick,
  borderRadius = "md",
  loading = false,
  style,
  ...rest
}) => {
  const isBorderInclude = ["none", "md", "lg", "full"].includes(
    borderRadius.toString(),
  )

  const getButtonClass = (): string => {
    let buttonClass =
      "flex items-center font-medium gap-2 justify-center text-sm"
    const textColors = {
      primary: " text-white",
      secondary: " text-secondary-500",
      danger: " text-error-500 border-error-700",
    }
    const borderColors = {
      primary: " border-base",
      secondary: " border-base",
      danger: " border-error-500",
    }

    const variantClasses = {
      outlined: ` border bg-transparent hover:none ${textColors[color]} ${borderColors[color]}`,
      text: `  ${textColors[color]} bg-transparent`,
      default: " shadow",
    }
    buttonClass += variantClasses[variant] || variantClasses.default

    const colorClasses = {
      primary: " bg-primary-500 text-white hover:bg-primary-600",
      secondary: " bg-gray-500 text-white hover:bg-gray-600",
      danger: " bg-error-500 text-white hover:bg-error-700",
    }
    if (variant === "default") buttonClass += colorClasses[color] || ""

    const sizeClasses = {
      sm: " text-sm px-3 h-[32px]",
      md: " text-base px-4 h-[40px]",
      lg: " text-lg px-5 h-[48px]",
    }
    buttonClass += sizeClasses[size] || sizeClasses.md

    if (isBorderInclude) {
      buttonClass += ` rounded-${borderRadius}`
    }

    if (fullWidth) {
      buttonClass += " w-full"
    }
    if (classes) {
      buttonClass += ` ${classes}`
    }
    if (disabled) {
      buttonClass += " opacity-50 cursor-not-allowed"
    }
    return buttonClass
  }

  const renderButton = (
    <button
      className={getButtonClass()}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      style={{
        borderRadius: isBorderInclude ? undefined : +borderRadius,
        ...style,
      }}
      {...rest}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {!loading && endIcon && <span>{endIcon}</span>}
    </button>
  )

  if (href) {
    return <a href={href}>{renderButton}</a>
  }
  return renderButton
}
