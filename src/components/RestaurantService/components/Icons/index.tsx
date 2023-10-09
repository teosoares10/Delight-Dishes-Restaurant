import Coffee from './Coffee';
import Pizza from './Pizza';
import Meal from './Meal';

export default function IconService({ icon }: { icon: string }) {
  return (
    <>
      {icon === 'fastfood' ? <Pizza /> : null}
      {icon === 'meal' ? <Meal /> : null}
      {icon === 'coffee' ? <Coffee /> : null}
    </>
  );
}
