import Text from '@/components/ui/text';

type CardProps = {
  children: string;
  className?: string;
};

export function CardContent({ children, className }: CardProps) {
  return <Text className={className}>{children}</Text>;
}
