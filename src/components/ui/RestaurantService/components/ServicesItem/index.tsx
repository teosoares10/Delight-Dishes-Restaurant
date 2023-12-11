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
        'flex flex-col justify-center w-[24rem] h-[14rem] space-y-2 px-4 py-2 border-orange-400 border',
        className
      )}
      data-testid="service-item"
    >
      <div className="flex items-center space-x-4">
        {icon ? icon : <span>Icon</span>}
        <Title className="text-xl">{title}</Title>
      </div>
      <Text className="text-left">{description}</Text>
    </div>
  );
}