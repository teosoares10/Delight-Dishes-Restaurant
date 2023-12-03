import { cn } from '@/lib/utils';

export default function ContactWIthIcon({
  contact,
  icon,
  className
}: {
  contact: string;
  icon: JSX.Element;
  className?: string;
}) {
  return (
    <div className={cn('flex gap-4 items-center', className)}>
      {icon}
      <span className="block" data-testid="span">
        {contact}
      </span>
    </div>
  );
}
