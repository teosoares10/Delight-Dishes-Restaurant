import { Button } from '../../button';
import Link from 'next/link';

type CardProps = {
  text: string;
  onClick?: () => void;
  link?: string;
};

export function CardAction({ text, link, onClick }: CardProps) {
  return (
    <div>
      {link ? (
        <Button className="text-orange-600" variant={'link'} asChild>
          <Link
            href={link}
            className="capitalize bg-orange-600 text-white hover:bg-transparent hover:text-orange-600 hover:border-orange-600 hover:border delay-75 block font-bold"
          >
            {text}
          </Link>
        </Button>
      ) : (
        <Button
          onClick={onClick}
          className="text-white bg-orange-600 hover:text-orange-600 capitalize"
        >
          {text}
        </Button>
      )}
    </div>
  );
}
