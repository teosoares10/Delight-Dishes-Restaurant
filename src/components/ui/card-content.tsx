import Text from '@/components/ui/text';

type CardProps = {
  text: string;
  className?: string;
};

export function CardContent({ text, className }: CardProps) {
  return <Text className={className}>{text}</Text>;
}
