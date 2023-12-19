import Text from '../../Typography/Text';

type CardProps = {
  description: string;
};

export function CardDescription({ description }: CardProps) {
  return <Text>{description}</Text>;
}
