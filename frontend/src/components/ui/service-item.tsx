import Text from '@/components/ui/text';
import Title from '@/components/ui/title';
import { cn } from '@/lib/utils';

type ServiceItemProps = {
  className?: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function ServiceItem({
  className,
  icon,
  title,
  description
}: ServiceItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center w-[24rem] h-[14rem] space-y-2 px-4 py-2 bg-gray-900/10 rounded-lg',
        className
      )}
    >
      <div className="flex items-center space-x-4">
        {icon ? icon : <span>Icon</span>}
        <Title className="text-xl">{title}</Title>
      </div>
      <Text className="text-left">{description}</Text>
    </div>
  );
}
