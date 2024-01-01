import Text from '@/components/ui/text';

type CardProps = {
  content: string;
  className?: string;
};

export function CardContent({ content, className }: CardProps) {
  return <Text className={className}>{content}</Text>;
}
