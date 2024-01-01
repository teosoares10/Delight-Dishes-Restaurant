import CoffeeIcon from '@/components/ui/coffee-icon';
import PizzaIcon from '@/components/ui/pizza-icon';
import MealIcon from '@/components/ui/meal-icon';

export default function ServiceIcon({ icon }: { icon: string }) {
  return (
    <div className="text-orange-600">
      {icon === 'fastfood' ? <PizzaIcon /> : null}
      {icon === 'meal' ? <MealIcon /> : null}
      {icon === 'coffee' ? <CoffeeIcon /> : null}
    </div>
  );
}
