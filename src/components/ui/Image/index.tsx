import { cn } from '@/lib/utils';
import Image from 'next/image';

type ImgProps = {
  className?: string;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export default function Img({
  className,
  src,
  alt,
  width = 200,
  height = 500
}: ImgProps) {
  return (
    <Image
      className={cn('bg-slate-600', className)}
      src={src}
      width={width}
      height={height}
      alt={`${alt}`}
      data-testid="image"
    />
  );
}
