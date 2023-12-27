import Title from '@/components/ui/title';
import { ChefApiResponse } from '@/@types/type';
import { ChefList } from './chef-list';

export default function Chef({ attributes }: ChefApiResponse) {
  return (
    <div className="space-y-16 py-36 px-12">
      <Title className="text-4xl">our masters chefs</Title>
      <div className="h-[20rem] flex gap-4">
        <ChefList chefs={attributes} />
      </div>
    </div>
  );
}
