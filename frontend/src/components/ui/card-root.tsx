type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardRoot({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}
