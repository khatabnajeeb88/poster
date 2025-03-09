import React from 'react'

interface BreadcrumbProps {
  children: React.ReactNode
}

interface BreadcrumbListProps {
  children: React.ReactNode
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbLinkProps {
  children: React.ReactNode
  href: string
}

interface BreadcrumbSeparatorProps {
  className?: string
}

interface BreadcrumbPageProps {
  children: React.ReactNode
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children }) => {
  return <nav>{children}</nav>
}

export const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ children }) => {
  return <ol>{children}</ol>
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ children, href }) => {
  return <a href={href}>{children}</a>
}

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({ className }) => {
  return <li className={className}>/</li>
}

export const BreadcrumbPage: React.FC<BreadcrumbPageProps> = ({ children }) => {
  return <span>{children}</span>
}

// Add similar interfaces for other breadcrumb components 