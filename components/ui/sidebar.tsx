interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  // ... existing implementation ...
}

interface SidebarInsetProps {
  children: React.ReactNode
}

export const SidebarInset: React.FC<SidebarInsetProps> = ({ children }) => {
  // ... existing implementation ...
}

interface SidebarTriggerProps {
  className?: string
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({ className }) => {
  // ... existing implementation ...
} 