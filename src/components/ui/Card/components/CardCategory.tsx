import Text from '../../Typography/Text';

type CardProps = {
  category: string;
};

export function CardCategory({ category }: CardProps) {
  return <Text>{category}</Text>;
}
