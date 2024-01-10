import { cn } from '@/lib/utils';
import Text from './text';
import Title from './title';

export function Ingredients({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      <Title className="text-left text-2xl">ingredients</Title>
      <ul>
        <li>
          <Text>1 cup - Lorem ipsum</Text>
        </li>
        <li>
          <Text>1/2 cup - Lorem ipsum</Text>
        </li>
        <li>
          <Text>1 cup - Lorem ipsum</Text>
        </li>
        <li>
          <Text>1 cup - Lorem ipsum</Text>
        </li>
      </ul>
    </div>
  );
}
