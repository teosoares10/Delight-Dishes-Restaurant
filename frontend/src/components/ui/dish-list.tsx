import Img from '@/components/ui/image';
import dishes from 'src/constants/Local/dishes';
import DishItem from '@/components/ui/dish-item';

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
