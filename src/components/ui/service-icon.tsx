import CoffeeIcon from './CoffeeIcon';
import PizzaIcon from './PizzaIcon';
import MealIcon from './MealIcon';

export default function ServiceIcon({ icon }: { icon: string }) {
  return (
    <div className="text-orange-600">
      {icon === 'fastfood' ? <PizzaIcon /> : null}
      {icon === 'meal' ? <MealIcon /> : null}
      {icon === 'coffee' ? <CoffeeIcon /> : null}
    </div>
  );
}
