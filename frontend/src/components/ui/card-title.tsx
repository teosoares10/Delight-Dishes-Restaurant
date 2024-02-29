import Title from '@/components/ui/title';

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

export function CardTitle({ children, title, className, asChild }: CardProps) {
  return (
    <Title className={className} asChild={asChild}>
      {title ? title : children}
    </Title>
  );
}
