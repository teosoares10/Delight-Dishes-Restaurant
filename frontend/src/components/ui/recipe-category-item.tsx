import { Button } from './button';

export function RecipeCategoryItem({ title }: { title: string }) {
  return (
    <li>
      <Button className="uppercase">{title}</Button>
    </li>
  );
}
