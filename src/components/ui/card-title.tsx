import Title from '@/components/ui/title';

type CardProps = {
  title: string;
  className?: string;
};

export function CardTitle({ title, className }: CardProps) {
  return <Title className={className}>{title}</Title>;
}
