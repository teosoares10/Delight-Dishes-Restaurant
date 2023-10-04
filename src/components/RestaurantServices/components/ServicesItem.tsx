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
        'flex flex-col items-center justify-center w-[24rem] h-[16rem] space-y-4 px-4 bg-red-900 shadow-md hover:shadow-lg hover:shadow-gray-700 shadow-gray-700 transition-shadow duration-500',
        className
      )}
    >
      {icon ? icon : <p>Icon</p>}
      <h2 className="font-bold text-2xl capitalize">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
