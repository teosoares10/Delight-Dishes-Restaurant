import Img from '@/components/Image';
import dishes from '@/db/Local/dishes';
import DishItem from './DishItem';

export default function DishList({ category }: { category: string }) {
  return (
    <>
      {dishes
        .filter((dish) => {
          return dish.category === category;
        })
        .map((dish) => (
          <DishItem
            key={dish.id}
            img={
              <Img
                className="w-full h-full rounded-full"
                src={dish.src}
                width={100}
                height={100}
              />
            }
            title={dish.title}
            price={dish.price}
          />
        ))}
    </>
  );
}
