import Link from 'next/link';
import SocialMedia from '../SocialMedia';
import { Button } from '../ui/button';

type CardProps = {
  type: 'menu' | 'service' | 'chef';
  img?: React.ReactNode;
  title: string;
  description: string;
  price?: string;
};

export default function Card({
  type,
  img,
  title,
  description,
  price
}: CardProps) {
  return (
    <section className="space-y-4 bg-blue-600 px-10 py-8 shadow-md hover:shadow-lg hover:shadow-gray-700 shadow-gray-700 transition-shadow duration-500">
      {type === 'service' ? (
        <>
          <div>Icon</div>
          <h2 className="font-bold text-2xl capitalize">{title}</h2>
          <p>{description}</p>
        </>
      ) : null}
      {type === 'menu' ? (
        <>
          <div className="relative">
            {img}
            <span className="absolute top-0 right-0">{price}</span>
          </div>
          <h2 className="font-bold text-2xl capitalize">{title}</h2>
          <p>{description}</p>
          <Button>
            <Link href={''}>Order Now!</Link>
          </Button>
        </>
      ) : null}
      {type === 'chef' ? (
        <>
          <div className="relative">{img}</div>
          <h2 className="font-bold text-2xl capitalize">{title}</h2>
          <p>{description}</p>
          <SocialMedia />
        </>
      ) : null}
    </section>
  );
}
