import { MenusProps } from '@/@types/menus';
import { Card } from './card';

export function FoodMenuList({ menus }: MenusProps) {
  return (
    <ul>
      {menus?.map((menu, index) => (
        <li key={index}>
          <Card.Root>
            <div className="flex justify-between">
              <Card.Title title={menu.title} />
              <span>{menu.price}</span>
            </div>
            <Card.Content content={menu.description} />
          </Card.Root>
        </li>
      ))}
    </ul>
  );
}
