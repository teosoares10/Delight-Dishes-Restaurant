import Text from './Text';
import Title from './Title';

export default function Logo() {
  return (
    <div className="text-center" data-testid="logo">
      <Title className="text-xl tracking-[.2rem]">delight dishes</Title>
      <Text className="text-xs tracking-[.3rem] uppercase">restaurant</Text>
    </div>
  );
}
