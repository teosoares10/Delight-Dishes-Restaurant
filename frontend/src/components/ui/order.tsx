import Link from 'next/link';
import Title from './title';
import Img from './image';
import ButtonLink from './button-link';

export default function Order() {
  return (
    <div>
      <Title className="text-center uppercase" asChild>
        <h2>
          order <span className="block">pick-up and delivery</span>
        </h2>
      </Title>

      <section className="grid items-center">
        <ul className="flex justify-center items-center p-4">
          <li>
            <Link href="">
              <div className="relative">
                <Img src="" alt="" />
                <span className="absolute left-8 bottom-12">#Desserts</span>
              </div>
            </Link>
          </li>
        </ul>
        <ButtonLink shortDescription="order now" href="" className="" />
      </section>
    </div>
  );
}
