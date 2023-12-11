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
        'flex flex-col items-center justify-center w-[23rem] h-[23rem] space-y-4 px-14 py-8 border border-orange-400 shadow-md hover:shadow-lg hover:shadow-orange-500 hover:border-0 transition-shadow duration-500',
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
