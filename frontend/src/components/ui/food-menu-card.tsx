import Title from './title';

type FoodMenuCardProps = {
  title: string;
  menuList?: JSX.Element;
  img?: JSX.Element;
};

export function FoodMenuCard({ title, menuList, img }: FoodMenuCardProps) {
  return (
    <div>
      {img}
      <Title>{title}</Title>
      {menuList}
    </div>
  );
}
