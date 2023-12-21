import Title from './Title';

type CardProps = {
  title: string;
  className?: string;
};

export function CardTitle({ title, className }: CardProps) {
  return <Title className={className}>{title}</Title>;
}
