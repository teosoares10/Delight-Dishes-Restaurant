import Coffee from './components/Coffee';
import Food from './components/Food';
import Meal from './components/Meal';

export default function IconService({ icon }: { icon: string }) {
  return (
    <>
      {icon === 'meal' ? <Meal /> : null}
      {icon === 'fastfood' ? <Food /> : null}
      {icon === 'coffee' ? <Coffee /> : null}
    </>
  );
}
