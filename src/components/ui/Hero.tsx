import Img from './Image';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="h-screen flex justify-between items-center pt-4 px-12">
      <div className="space-y-8 w-[35rem]">
        <Title className="tracking-[.5rem] text-4xl text-left uppercase">
          Delight Dishes: A Culinary Odyssey
        </Title>
        <Text className="w-[35rem]">
          Embark on a gastronomic journey like never before at Delight Dishes,
          where passion meets palate. Our restaurant is a celebration of diverse
          tastes, artfully curated to transport you to culinary realms that
          ignite your senses.
        </Text>
        <Button
          className="w-40 bg-orange-500 capitalize"
          variant="link"
          data-testid="button_link"
        >
          view menu
        </Button>
      </div>
      <div className="w-[40rem] h-[30rem] bg-gray-500">
        <Img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={200}
        />
      </div>
    </div>
  );
}
