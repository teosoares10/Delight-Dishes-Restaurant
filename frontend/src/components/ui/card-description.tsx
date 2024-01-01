import Text from '@/components/ui/text';

type CardProps = {
  description: string;
  className?: string;
};

export function CardDescription({ description, className }: CardProps) {
  return <Text className={className}>{description}</Text>;
}
