import Coffee from './Coffee';
import Food from './Food';
import Meal from './Meal';

export default function IconService({ icon }: { icon: string }) {
  return (
    <>
      {icon === 'meal' ? <Meal /> : null}
      {icon === 'fastfood' ? <Food /> : null}
      {icon === 'coffee' ? <Coffee /> : null}
    </>
  );
}
