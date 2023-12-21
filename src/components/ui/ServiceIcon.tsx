import CoffeeIcon from './Coffee';
import PizzaIcon from './Pizza';
import MealIcon from './Meal';

export default function IconService({ icon }: { icon: string }) {
  return (
    <div className="text-orange-600" data-testid="icon-service">
      {icon === 'fastfood' ? <PizzaIcon /> : null}
      {icon === 'meal' ? <MealIcon /> : null}
      {icon === 'coffee' ? <CoffeeIcon /> : null}
    </div>
  );
}
