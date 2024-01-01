import Img from '@/components/ui/image';

type CardProps = {
  className?: string;
  src: string;
  alt?: string;
};

export function CardImg({ className, src, alt }: CardProps) {
  return <Img src={src} alt={alt} className={className} />;
}
