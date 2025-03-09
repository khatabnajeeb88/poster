interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ orientation, className }) => {
  return <div className={className} />
} 