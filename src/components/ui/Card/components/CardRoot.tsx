type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardRoot({ children, className }: CardProps) {
  return (
    <div className={className} data-testid="posts">
      {children}
    </div>
  );
}
