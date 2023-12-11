import Text from '@/components/ui/Typography/Text';
import Title from '@/components/ui/Typography/Title';
import { cn } from '@/lib/utils';

type ServicesItemProps = {
  className?: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function ServicesItem({
  className,
  icon,
  title,
  description
}: ServicesItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-[18rem] h-[18rem] space-y-2 px-4 py-4 border-orange-400 border',
        className
      )}
      data-testid="service-item"
    >
      {icon ? icon : <span>Icon</span>}
      <Title className="text-xl mt-4">{title}</Title>
      <Text>{description}</Text>
    </div>
  );
}
