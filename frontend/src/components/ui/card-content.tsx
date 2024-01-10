import Text from '@/components/ui/text';

type CardProps = {
  content: React.ReactNode;
  className?: string;
};

export function CardContent({ content, className }: CardProps) {
  return <Text className={className}>{content}</Text>;
}
