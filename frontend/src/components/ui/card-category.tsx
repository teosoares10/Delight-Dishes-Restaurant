import Text from '@/components/ui/text';

type CardProps = {
  category: string;
  className?: string;
};

export function CardCategory({ category, className }: CardProps) {
  return <Text className={className}>{category}</Text>;
}
