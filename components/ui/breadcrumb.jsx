import React from 'react'
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

export const Breadcrumb = ({ children }) => {
  return <nav>{children}</nav>
}

export const BreadcrumbList = ({ children }) => {
  return <ol>{children}</ol>
}

export const BreadcrumbItem = ({ children, className }) => {
  return <li className={className}>{children}</li>
}

export const BreadcrumbLink = ({ children, href }) => {
  return <a href={href}>{children}</a>
}

export const BreadcrumbSeparator = ({ className }) => {
  return <li className={className}>/</li>
}

export const BreadcrumbPage = ({ children }) => {
  return <span>{children}</span>
}

const BreadcrumbEllipsis = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
