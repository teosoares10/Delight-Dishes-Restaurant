import { cn } from '@/lib/utils';
import { RecipeCategoryItem } from './recipe-category-item';

export function RecipeCategoryList({ className }: { className?: string }) {
  return (
    <ul className={cn('flex justify-center gap-4', className)}>
      <RecipeCategoryItem title="entrees" />
      <RecipeCategoryItem title="breakfast" />
      <RecipeCategoryItem title="lunch" />
      <RecipeCategoryItem title="desserts" />
      <RecipeCategoryItem title="sides" />
      <RecipeCategoryItem title="drinks" />
    </ul>
  );
}
